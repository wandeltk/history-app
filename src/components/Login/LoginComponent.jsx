import { Modal, Image, } from 'semantic-ui-react'
import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {auth} from '../../Remote/remote-service'
   


const LoginComponent = (props) => { 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showModal, setShowModal] = useState(false)

    const loginUser = async (e) => {
        e.preventDefault();
        let authUser
        try {
            authUser = await auth({username: username, password: password})
            props.login(authUser)
            setShowModal(false)
        } catch (x) {
            console.log('error')
        }

    }

    const setVals = (e) => {
        if(e.target.id === 'username'){
            setUsername(e.target.value)
        } else if(e.target.id === 'password'){
            setPassword(e.target.value)
        }
    }

    window.onkeypress = (event) => {
        let key = event.key.toUpperCase();
        if(key === 'ENTER' && Modal.open === true) {
            loginUser();    
        }
    }

    return(
        <Modal closeIcon onClose={() =>{setShowModal(false)}} trigger={<a className="item" onClick={() => {setShowModal(true)}}>Login</a>} open={showModal}>
            <Modal.Header>Login</Modal.Header>
            <Modal.Content image>
            <Image wrapped size='medium' src='https://i.imgur.com/lqRo3pp.png' />
            <Modal.Description>
                <h1 className="ui header">
                        <div className="content">
                            What will you discover today?
                        </div>
                </h1>
                <form className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input id="username" placeholder="Username" onChange={setVals} autoFocus/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input id="password" type='password' placeholder="Password" onChange={setVals} />
                    </div>
                    <div><Link to={'/register'}>Dont have an account? Sign up!</Link></div>
                    <button style={{marginTop: '5px'}} className="ui button" onClick={loginUser}>Login</button>
                </form>
            </Modal.Description>
            </Modal.Content>
        </Modal>
    )
} 

export default LoginComponent;
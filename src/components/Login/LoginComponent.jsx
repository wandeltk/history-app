import { Modal, Image, } from 'semantic-ui-react'
import React from 'react'
   


const LoginComponent = (props) => { 

    const login = () => {
        console.log('login')
    }

    window.onkeypress = (event) => {
        let key = event.key.toUpperCase();
        if(key === 'ENTER' && Modal.open === true) {
            login();    
        }
    }

    return(
        <Modal trigger={<a className="item">Login</a>}>
            <Modal.Header>Login</Modal.Header>
            <Modal.Content image>
            <Image wrapped size='medium' src='https://i.imgur.com/lqRo3pp.png' />
            <Modal.Description>
                <h1 className="ui header">
                        <div className="content">
                            What will you discover today?
                        </div>
                </h1>
                <form class="ui form">
                    <div class="field">
                        <label>Username</label>
                        <input placeholder="Username" autoFocus/>
                    </div>
                    <div class="field">
                        <label>Password</label>
                        <input type='password' placeholder="Password" />
                    </div>
                    <button class="ui button" onClick={login}>Login</button>
                </form>
            </Modal.Description>
            </Modal.Content>
        </Modal>
    )
} 

export default LoginComponent;
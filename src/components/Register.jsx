import { Modal } from 'semantic-ui-react'
import React from 'react'
                    
export default class Register extends React.Component {

    render(){
        return(
            <Modal trigger={<a className="item">Register</a>}>
                <Modal.Header><h1 className="ui header" style={{margin: "auto"}}>
                            <div className="content" style={{margin: "auto"}}>
                                Find History Near You!
                                <div class="sub header">Register for an account today</div>
                            </div>
                    </h1></Modal.Header>
                <Modal.Content>
                <Modal.Description>
                    <h2 className="ui header">Register
                    </h2>
                    <form class="ui form">
                        <div class="field">
                            <label>First Name</label>
                            <input placeholder="First Name" autoFocus/>
                        </div>
                        <div class="field">
                            <label>Last Name</label>
                            <input placeholder="Last Name" />
                        </div>
                        <div class="field">
                            <label>Username</label>
                            <input placeholder="Username" />
                        </div>
                        <div class="field">
                            <label>Password</label>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div class="field">
                            <label>Re-enter Password</label>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div class="field">
                            <label>My Location</label>
                            <input placeholder="Password" />
                        </div>
                        <button type="submit" class="ui button">Register</button>
                        
                    </form>
                </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}                
                    
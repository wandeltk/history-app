import { Button, Icon, Select, Divider, Message } from 'semantic-ui-react'
import React, {useState} from 'react'
import '../App.css'
import {register} from '../Remote/remote-service'
import states from '../stateData'

                    
const Register = () => {
    const [avatar, setAvatar] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState(true);

    const findMe = (e) => {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition((position) => {

            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
          })

    }

    const selectIcon = (e) => {
        e.preventDefault();
        setAvatar(e.target.id);
        console.log(avatar)
    }

    const registerUser = (e) => {
        e.preventDefault();
        let newUser = register({
            username: username,
            password: password,
            email: email,
            first_name: firstName,
            last_name: lastName,
            user_lat: lat,
            user_long: long,
            avatar: avatar
         })
    }

    const verifyPassword = (e) => {
        if(e.target.value != password){
            setConfirmPassword(false);
        } else {
            setConfirmPassword(true)
        }
    }

    const setVals = (e) => {
        switch (e.target.id){
            case 'first_name':
                setFirstName(e.target.value);
                break;
            case 'last_name':
                setLastName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'username':
                setUsername(e.target.value);
                break;
            default:
                break;
        }
    }

    return(
        <>
        <div style={{margin: '6%'}}>
            <h1 className="ui header" style={{marginLeft: "6%"}}>
                <img src='https://image.flaticon.com/icons/svg/2933/2933097.svg'/>
                <div className="content">
                    Register
                    <div className="sub header">Bring yesterday to today!</div>
                </div>
            </h1>

            <form className="ui form">
                <div className="ui grid" style={{marginLeft: "5%"}}>
                    <div className="eight wide column">
                        <div className="field">
                            <label>First Name</label>
                            <input id='first_name' placeholder="First Name" autoFocus onChange={setVals}/>
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input id='last_name' placeholder="Last Name" onChange={setVals}/>
                        </div>
                        <div className="field">
                            <label>Email*</label>
                            <input id="email" placeholder="Email" onChange={setVals}/>
                        </div>
                        <div className="field">
                            <label>Username*</label>
                            <input id="username" placeholder="Username" onChange={setVals}/>
                        </div>
                        <div className="field">
                            <label>Password*</label>
                            <input id="password" type="password" placeholder="Password" onChange={setVals}/>
                        </div>
                        <div className="field">
                            <label>Re-enter Password*</label>
                            <input id="repassword" type="password" placeholder="Password" onChange={verifyPassword}/>
                            {!confirmPassword?
                            <Message negative>
                                <p>Passwords must match</p>
                            </Message>:
                            <></>
                            }
                        </div>
                        <div className="field">
                            <label>My Location</label>
                
                            <div style={{marginTop: '5px', marginBottom: '5px'}}><Button color="black" style={{backgroundColor: '#59bdff'}} onClick={findMe} ><Icon name="crosshairs" />Use Current Location</Button></div>
                            <Divider horizontal>Or</Divider>

                            <Select placeholder='Select your state' options={states} />
                            {lat?
                            <Message floating info>
                            <h4>User Location:</h4>
                            <span>Latitude: {lat}</span>
                            <p>Longitude: {long}</p>
                            </Message>:
                            <></>
                            }
                        </div>
                        <button  onClick={registerUser} className="ui button" >Register</button>
                        
                    </div>

                    <div className="eight wide column">
                        <div className="field">
                            <label>Select an Avatar</label>
                            <div className="ui grid">

                                <div className="four wide column">
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933131")}><img id="2933131" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933131.svg"/></Button>
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933128")}><img id="2933128" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933128.svg"/></Button>
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933124")}><img id="2933124" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933124.svg"/></Button>
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933193")}><img id="2933193" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933193.svg"/></Button>
                                </div>
                                <div className="four wide column">
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933199")}><img id="2933199" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933199.svg"/></Button>
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933047")}><img id="2933047" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933047.svg"/></Button>
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933161")}><img id="2933161" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933161.svg"/></Button>
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933151")}><img id="2933151" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933151.svg"/></Button>
                                </div>
                                <div className="four wide column">
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933149")}><img id="2933149" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933149.svg"/></Button>
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933034")}><img id="2933034" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933034.svg"/></Button>
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933141")}><img id="2933141" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933141.svg"/></Button>
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933185")}><img id="2933185" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933185.svg"/></Button>
                                </div>
                                <div className="four wide column">
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933146")}><img id="2933146" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933146.svg"/></Button>
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933056")}><img id="2933056" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933056.svg"/></Button>
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933182")}><img id="2933182" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933182.svg"/></Button>
                                    <Button onClick={selectIcon} style={{marginBottom: "1vh"}} disabled={(avatar === "2933170")}><img id="2933170" style={{height: '10vh'}} src="https://image.flaticon.com/icons/svg/2933/2933170.svg"/></Button>
                                </div>
                                <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                            </div>
                            
                        </div> 
                    </div>
                </div>
            </form>

            </div>
        </>
    )
}  

export default Register
                    
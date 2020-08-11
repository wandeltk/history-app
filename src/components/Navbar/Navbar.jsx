import React, {useState} from 'react'
import Login from '../Login/LoginContainter'
import {Link} from 'react-router-dom'
import {Menu, Dropdown, Image, Button} from 'semantic-ui-react'
import { Icon } from '@material-ui/core';

const NavbarComponent = (props) => {

    const [activeTab, setActiveTab] = useState("explore")

    const trigger = (
        <>
        <span>
          <Image style={{marginRight: '5px'}} avatar src={`https://image.flaticon.com/icons/svg/2933/${props?.authUser?.avatar}.svg`} />
        </span> 
        <span> 
            <h4>{`${props?.authUser?.first_name} ${props?.authUser?.last_name}`}</h4>
        </span>
        </>
      )

        return(
            <>
                <Menu size="large" >
                    
                    <Link to="/"><Menu.Item active={activeTab === "explore"} onClick={() => {setActiveTab("explore")}} style={{height:'100%'}}>Explore</Menu.Item></Link>
                    <Link to="/"><Menu.Item active={activeTab === "near"} onClick={() => {setActiveTab("near")}} style={{height:'100%'}}>Near Me</Menu.Item></Link>
                    <Link to="/"><Menu.Item active={activeTab === "about"} onClick={() => {setActiveTab("about")}} style={{height:'100%'}}>About Splore</Menu.Item></Link>
                    <div className="right menu">
                        {props?.authUser?
                            <>
                            <Dropdown item trigger={trigger}>
                                <Dropdown.Menu>
                                <Dropdown.Item>My Account</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => {props.logout()}}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </>:
                            <>
                                <Login/>
                                <Link to="/register"><a className="item" style={{height:'100%', backgroundColor: '#59bdff', color:'white'}}>Register</a></Link>
                            </>
                        }
                    </div>
                </Menu>
            </>
        )
}

export default NavbarComponent


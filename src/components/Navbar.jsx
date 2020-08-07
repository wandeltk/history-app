import React from 'react'
import Login from './Login/LoginContainter'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

export default class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <>
                <Menu size="large" >
                    <Link to="/"><a className="item" style={{height:'100%'}}>Home</a></Link>
                    <a className="item">Map</a>
                    <a className="item" >My Places</a>
                    <div className="right menu">
                        {this.props.authUser?
                            <a className="item">Logout</a>:
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
}


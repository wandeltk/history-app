import React from 'react'
import Login from './Login/LoginContainter'
import Register from './Register'

export default class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <>
                <div className="ui large menu" style={{height: "5vh", margin: "auto"}}>
                    <a className="active item">Home</a>
                    <a className="item">Map</a>
                    <a className="item" >My Places</a>
                    <div className="right menu">
                        {this.props.authUser?
                            <a className="item">Logout</a>:
                            <>
                                <Login/>
                                <Register/>
                            </>
                        }
                    </div>
                </div>
            </>
        )
    }
}


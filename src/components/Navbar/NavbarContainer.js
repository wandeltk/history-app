import { connect } from 'react-redux';
import NavbarComponent from './Navbar'
import {logout} from '../../Actions/LoginActions'

const mapStateToProps = state => {
    return {
        authUser: state.authReducer.authUser,
    }
}

const mapDispatchToProps ={
    logout
}


const Navbar = connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)

export default Navbar
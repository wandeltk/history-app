import { connect } from 'react-redux';
import LoginComponent from './LoginComponent'
import { login } from '../../Actions/LoginActions';

const mapStateToProps = state => {
    return {
        authUser: state.authReducer.authUser,
        errorMessage: state.authReducer.errorMessage
    }
}

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
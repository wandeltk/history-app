
import {auth} from '../Remote/remote-service';
import {store} from '../index';

export const loginActionTypes = {
    SUCCESSFUL_LOGIN:'SUCCESSFUL_LOGIN',
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
    SERVER_ERROR: 'SERVER_ERROR',
    BAD_REQUEST_ERROR: 'BAD_REQUEST_ERROR',
    SUCCESSFUL_LOGOUT: 'SUCCESSFUL_LOGOUT'
}

async function loginAction (authUser){

    if(authUser !== {}){
        return({
            type: loginActionTypes.SUCCESSFUL_LOGIN,
            payload: authUser
        })
    }
    else {
        // let status = e.response.status;

        // if (status === 400){
        //     return({
        //         type: loginActionTypes.BAD_REQUEST_ERROR,
        //         payload: "You've sent a request that we don't know how to handle"
        //     }) 
        // } else if (status === 401){
            return({
                type: loginActionTypes.INVALID_CREDENTIALS,
                payload: "The username or password entered was invalid, please try logging in again or register for an account."
            })
        // } else {
        //     return({
        //         type: loginActionTypes.SERVER_ERROR,
        //         payload: "Sorry, there was a problem on our end!"
        //     })
        // }
    }
}

export const login = (authUser) => store.dispatch(loginAction(authUser))

async function logoutAction (){
    return {
        type: loginActionTypes.SUCCESSFUL_LOGOUT,
        payload: null
    }
}

export const logout = async () => store.dispatch(await logoutAction())



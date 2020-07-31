import {loginActionTypes} from '../Actions/LoginActions';

const initialState = {
    authUser: null,
    errorMessage: ''
}

export const authReducer = (state = initialState, action) =>{

    switch(action.type){
        case loginActionTypes.SUCCESSFUL_LOGIN:
            return {...state, authUser: action.payload}
        case loginActionTypes.SUCCESSFUL_LOGOUT:
            return {...state, authUser: action.payload}
        case loginActionTypes.INVALID_CREDENTIALS:
            return {...state, errorMessage: action.payload}
        case loginActionTypes.BAD_REQUEST_ERROR:
            return {...state, errorMessage: action.payload}
        case loginActionTypes.SERVER_ERROR:
            return {...state, errorMessage: action.payload}
        default:
            return state
    }
}



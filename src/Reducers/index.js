import {combineReducers} from 'redux';
import {authReducer} from './AuthReducer';
import {thisPlaceReducer} from './ThisPlaceReducer'

export const reducers = combineReducers({authReducer, thisPlaceReducer})

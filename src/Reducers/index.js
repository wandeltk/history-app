import {combineReducers} from 'redux';
import {authReducer} from './AuthReducer';
import {thisPlaceReducer} from './ThisPlaceReducer'
import {filterReducer} from './FilterReducer'

export const reducers = combineReducers({authReducer, thisPlaceReducer, filterReducer})

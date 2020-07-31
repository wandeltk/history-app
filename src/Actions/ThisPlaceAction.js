import {store} from '../index';

const setThisPlaceAction = (thisPlace) => {
    return({
        type: 'SET_THIS_PLACE_SUCCESS',
        payload: {...thisPlace}
    })
}

const clearThisPlaceAction = () => {
    return({
        type: "CLEAR_THIS_PLACE",
        payload: null
    })
}

export const setThisPlace = (thisPlace) => store.dispatch(setThisPlaceAction(thisPlace))
export const clearThisPlace = () => store.dispatch(clearThisPlaceAction())
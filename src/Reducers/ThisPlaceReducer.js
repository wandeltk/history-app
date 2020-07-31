const initialState = {
    thisPlace: ''
}

export const thisPlaceReducer = (state= initialState, action) => {
    switch(action.type){
        case 'SET_THIS_PLACE_SUCCESS':
            return {...state, thisPlace: action.payload}
        case 'CLEAR_THIS_PLACE':
            return {...state, thisPlace: null}
        default:
            return state
    }
}
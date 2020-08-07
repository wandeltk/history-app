
const initialState = {
    types: ['nhl', 'events'],
    states: [],
    periods: []
}

export const filterReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_TYPE_FILTER':
            return ({...state, types: action.payload})
        case 'SET_STATE_FILTER':
            return ({...state, states: action.payload})
        case 'SET_PERIOD_FILTER':
            return ({...state, periods: action.payload})
        case 'RESET_TYPE_FILTER':
            return ({...state, types: action.payload})
        case 'RESET_STATE_FILTER':
            return ({...state, states: action.payload})
        case 'RESET_PERIOD_FILTER':
            return ({...state, periods: action.payload})
        case 'RESET_ALL_FILTERS':
            return ({...state,
                        types: action.payload,
                        states: action.payload,
                        periods: action.payload})
        default:
            return state;
    }
}
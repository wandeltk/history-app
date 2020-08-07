import {store} from '../index';

const setTypeFilterAction = (types) => {
    return({
        type: 'SET_TYPE_FILTER',
        payload: [...types]
    })
}

export const setTypeFilter = (types) => store.dispatch(setTypeFilterAction(types))

const resetTypeFilterAction = () => {
    return({
        type: 'RESET_TYPE_FILTER',
        payload: ['nhl', 'events']
    })
}

export const resetTypeFilter = () => store.dispatch(resetTypeFilterAction())

const setPeriodFilterAction = (periods) => {
    return({
        type: 'SET_PERIOD_FILTER',
        payload: [...periods]
    })
}

export const setPeriodFilter = (periods) => store.dispatch(setPeriodFilterAction(periods))

const resetPeriodFilterAction = () => {
    return({
        type: 'RESET_PERIOD_FILTER',
        payload: []
    })
}

export const resetPeriodFilter = () => store.dispatch(resetPeriodFilterAction())

const setStateFilterAction = (states) => {
    return({
        type: 'SET_STATE_FILTER',
        payload: [...states]
    })
}

export const setStateFilter = (states) => store.dispatch(setStateFilterAction(states))

const resetStateFilterAction = () => {
    return({
        type: 'RESET_STATE_FILTER',
        payload: []
    })
}

export const resetStateFilter = () => store.dispatch(resetStateFilterAction())

const resetFiltersAction = () => {
    return({
        type: 'RESET_ALL_FILTERS',
        payload: []
    })
}

export const resetAllFilters = () => store.dispatch(resetFiltersAction())
import {connect} from 'react-redux'
import SearchMapComponent from './SearchMapComponent'
import {
    setTypeFilter,
    setStateFilter,
    setPeriodFilter,
    resetTypeFilter,
    resetStateFilter,
    resetPeriodFilter,
    resetAllFilters
} from '../../Actions/SearchMapFilterAction';


const mapStateToProps = (state) => ({
    types: state.filterReducer.types,
    states: state.filterReducer.states,
    periods: state.filterReducer.periods
})

const mapDispatchToProps = {
    setTypeFilter,
    setStateFilter,
    setPeriodFilter,
    resetTypeFilter,
    resetStateFilter,
    resetPeriodFilter,
    resetAllFilters
}

const SearchMap = connect(mapStateToProps, mapDispatchToProps)(SearchMapComponent)

export default SearchMap;

import {connect} from 'react-redux'
import {setThisPlace, clearThisPlace} from '../../Actions/ThisPlaceAction'
import MapComponent from './MapComponent'

const mapStateToProps = (state) => ({
    thisPlace: state.thisPlaceReducer.thisPlace,
    states: state.filterReducer.states,
    types: state.filterReducer.types,
    periods: state.filterReducer.periods,
    authUser: state.authReducer.authUser,
})

const mapDispatchToProps = {
    setThisPlace,
    clearThisPlace
}

const Map = connect(mapStateToProps, mapDispatchToProps)(MapComponent)

export default Map;
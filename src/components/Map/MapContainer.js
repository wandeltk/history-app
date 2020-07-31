
import {connect} from 'react-redux'
import {setThisPlace, clearThisPlace} from '../../Actions/ThisPlaceAction'
import MapComponent from './MapComponent'

const mapStateToProps = (state) => ({
    thisPlace: state.thisPlaceReducer.thisPlace
})

const mapDispatchToProps = {
    setThisPlace,
    clearThisPlace
}

const Map = connect(mapStateToProps, mapDispatchToProps)(MapComponent)

export default Map;
import {connect} from 'react-redux'
import {PlacePopupComponent} from './PlacePopup'

const mapStateToProps = (state) => ({
    thisPlace: state.thisPlaceReducer.thisPlace
})

const PlacePopup = connect(mapStateToProps)(PlacePopupComponent)

export default PlacePopup;
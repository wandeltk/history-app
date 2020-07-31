import {store} from '../index';

const setUserLocationAction = (userLatitude, userLongitude) => {
    return({
        action: 'SET_USER_LOCATION_SUCCESS',
        payload: {latitude: userLatitude, longitude: userLongitude}
    })
}

export const setUserLocation = async (userLat, userLong) => store.dispatch(await setUserLocationAction(userLat, userLong))


import React, {useState} from 'react'
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import MyLocationIcon from '@material-ui/icons/MyLocation';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import { useEffect } from 'react';
import getAllNHL from '../../Remote/remote-service'
import PlacePopup from '../Popup/PlacePopupContainer'


const  MapComponent = (props) => {

  const [userLat, setUserLat] = useState(36.6219)
  const [userLong, setUserLong] = useState(-98.055)

  navigator.geolocation.getCurrentPosition((position) => {
    setUserLat(position.coords.latitude)
    setUserLong(position.coords.longitude)
  })
  
  const [nhlList, setList] = useState([])
  const [eventMarkers, setEventMarkers] = useState([])
  const [veiwport, setVeiwport] = useState({
    latitude: userLat,
    longitude: userLong,
    width: "100%",
    height: "100%",
    zoom: 4
  })

  const getAllPlaces = async() => {
    let nhl = await getAllNHL();
    setList(nhl);
  }

  useEffect (() => {
    let placeMarkers = [];

    getAllPlaces()

    for(let place of nhlList){
      let lat = (+(place.latitude.match(/\d+/g)[0]) + (+(place.latitude.match(/\d+/g)[1])/60) + (+(place.latitude.match(/\d+/g)[2])/3600))
      let long = -1 * (+(place.longitude.match(/\d+/g)[0]) + (+(place.longitude.match(/\d+/g)[1])/60) + (+(place.longitude.match(/\d+/g)[2])/3600))
      placeMarkers.push(
        <Marker key={place.info_link} latitude={lat} longitude={long}>
          <button className = 'marker-btn' onClick={() =>{
            props.setThisPlace(place)}
          }>
            <EmojiFlagsIcon />
          </button>
        </Marker>)

    }
    setEventMarkers(placeMarkers)
  }, [nhlList, props.thisPlace])

  return(
      <ReactMapGl 
        {...veiwport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/wandeltk/ckcnkzybx2p351io6wncn8r9h"
        onViewportChange={veiwport => {
          setVeiwport(veiwport);
        }}   
      >
        {eventMarkers}

        <Marker latitude={userLat} longitude={userLong}><MyLocationIcon/></Marker>


        {props.thisPlace? (
        <Popup 
          latitude={(+(props.thisPlace?.latitude?.match(/\d+/g)[0]) + (+(props.thisPlace?.latitude?.match(/\d+/g)[1])/60) + (+(props.thisPlace?.latitude?.match(/\d+/g)[2])/3600))} 
          longitude={-1 * (+(props.thisPlace?.longitude?.match(/\d+/g)[0]) + (+(props.thisPlace?.longitude?.match(/\d+/g)[1])/60) + (+(props.thisPlace?.longitude?.match(/\d+/g)[2])/3600))}
          onClose={() =>{
            props.clearThisPlace()
          }}> 
          <PlacePopup/>
        </Popup>
        ) : <></> }
      </ReactMapGl>
  )
  
  
}

export default MapComponent;
import React, {useState} from 'react'
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import MyLocationIcon from '@material-ui/icons/MyLocation';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import { useEffect } from 'react';
import getAllNHL from '../../Remote/remote-service';
import PlacePopup from '../Popup/PlacePopupContainer';
import {convertLat, convertLong} from '../../util/convertCoords'


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
      let lat = convertLat(place.latitude)
      let long = convertLong(place.longitude)
      if(props.states.includes(place.state) || props.states.length == 0){
        placeMarkers.push(
          <Marker key={place.info_link} latitude={lat} longitude={long}>
            <button className = 'marker-btn' style={{border: 'rgba(0,0,0,0)', backgroundColor: 'rgba(0,0,0,0)'}} onClick={(e) =>{
              e.preventDefault();
              props.setThisPlace(place)}
            }>
              <EmojiFlagsIcon />
            </button>
          </Marker>)
      }

    }
    setEventMarkers(placeMarkers)
  }, [props.states, props.thisPlace])

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
          latitude={convertLat(props.thisPlace.latitude)} 
          longitude={convertLong(props.thisPlace.longitude)}
          onClose={() =>{
            setTimeout(function(){props.clearThisPlace()}, 50)
          }}> 
          <PlacePopup/>
        </Popup>
        ) : <></> }
      </ReactMapGl>
  )
  
  
}

export default MapComponent;
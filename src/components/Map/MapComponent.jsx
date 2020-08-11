import React, {useState} from 'react'
import ReactMapGl, {Marker, Popup, Layer, Source} from 'react-map-gl'
import MyLocationIcon from '@material-ui/icons/MyLocation';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import { useEffect } from 'react';
import {getAllNHL} from '../../Remote/remote-service';
import PlacePopup from '../Popup/PlacePopupContainer';
import {convertLat, convertLong} from '../../util/convertCoords'
import {Button, Icon, Dimmer, Loader} from 'semantic-ui-react'


const  MapComponent = (props) => {
  const [userLat, setUserLat] = useState(props.authUser?.user_lat || 36.6219)
  const [userLong, setUserLong] = useState(props.authUser?.user_long || -98.055)

  navigator.geolocation.getCurrentPosition((position) => {
    setUserLat(position.coords.latitude)
    setUserLong(position.coords.longitude)
  })

  const [veiwport, setVeiwport] = useState({
    latitude: userLat,
    longitude: userLong,
    width: "100%",
    height: "100%",
    zoom: 4
  })
  
  const [nhlMarkers, setnhlMarkers] = useState([])
  const [eventMarkers, setEventMarkers] = useState([])

  const getNHL = async() => {

    if(props.types.includes('nhl')){

      let placeMarkers = []
      let nhl = await getAllNHL();

      for(let place of nhl){

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

      setnhlMarkers(placeMarkers)
    } else {
      setnhlMarkers([])
    }
  }
 
  const findMe = () => {
        setVeiwport({
          latitude: userLat,
          longitude: userLong,
          width: "100%",
          height: "100%",
          zoom: 9
        })
  }

  useEffect (() => {

    getNHL()

  }, [props.states, props.thisPlace, props.types, props.authUser])

  return(
      <>
        
        <ReactMapGl
          {...veiwport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/wandeltk/ckcnkzybx2p351io6wncn8r9h"
          onViewportChange={veiwport => {
            setVeiwport(veiwport);
          }}   
        >
          {nhlMarkers.length === 0?
          <Dimmer active>
            <Loader inverted>Loading</Loader>
          </Dimmer>:
          <></>
          }
        
          {nhlMarkers}

          <Marker latitude={userLat} longitude={userLong}><MyLocationIcon/></Marker>

          <div style={{margin: '5px'}}><Button color="black" onClick={findMe} ><Icon name="crosshairs" />My Location</Button></div>


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
      </>
  )
  
  
}

export default MapComponent;
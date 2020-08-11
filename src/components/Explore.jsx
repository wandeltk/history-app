import React from 'react'
import Map from './Map/MapContainer'
import SearchMap from './SearchMap/SearchMapContainer'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import {Button, Dimmer, Loader} from 'semantic-ui-react'

export default class Explore extends React.Component{

    render() {
        return (
            <>
                <div className="ui grid" style={{margin: "auto"}} >
                    <div className="twelve wide column">
                        {/* <div className="twelve wide column" style={{marginBottom: '1%'}}>
                            <h1 className="ui header">
                                <img src='https://image.flaticon.com/icons/svg/814/814513.svg'/>
                                <div className="content">
                                    Splore
                                    <div className="sub header">Check out history near you!</div>
                                </div>
                            </h1>
                        </div> */}
                        <div className="twelve wide column" style={{height: "83vh"}}>
                                
                            <Map>
                                
                            </Map>
                        </div>
                    </div>
                    <div className="four wide column" style={{margin: 0}}>
                        <SearchMap></SearchMap>
                    </div>
                </div>
            </>
        )
    }
}
import React from 'react'
import Map from './Map/MapContainer'
import SearchMap from './SearchMap/SearchMapComponent'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';

export default class Explore extends React.Component{

    render() {
        return (
            <>
                <div className="ui grid" style={{margin: "auto"}}>
                    <div className="sixteen wide column">
                        
                    </div>
                    <div className="twelve wide column">
                        <div className="twelve wide column">
                            <h1 className="ui header">
                                <ExploreOutlinedIcon style={{fontSize: 60}}/>
                                <div className="content">
                                    Explore
                                    <div className="sub header">Check out history near you!</div>
                                </div>
                            </h1>
                        </div>
                        <div className="twelve wide column" style={{height: "83vh"}}>
                            <Map></Map>
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
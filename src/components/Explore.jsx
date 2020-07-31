import React from 'react'
import Map from './Map/MapContainer'
import SearchMap from './SearchMap'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';

export default class Explore extends React.Component{

    render() {
        return (
            <>
                <div className="ui grid" style={{margin: "auto"}}>
                    <div className="sixteen wide column">
                        
                    </div>
                    <div className="twelve wide column" style={{height: "83vh"}}>
                        <h1 className="ui header">
                            <ExploreOutlinedIcon style={{fontSize: 60}}/>
                            <div className="content">
                                Explore
                                <div className="sub header">Check out history near you</div>
                            </div>
                        </h1>
                        <Map></Map>
                    </div>
                    <div className="four wide column">
                        <SearchMap></SearchMap>
                    </div>
                </div>
            </>
        )
    }
}
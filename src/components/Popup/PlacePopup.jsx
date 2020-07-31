import React from 'react'

export const PlacePopupComponent = (props) => {

    return (
        <>
            <h2>{props?.thisPlace?.name}</h2>
            <img src={props?.thisPlace?.image_link}></img>
            <p>
                Latitude: {props?.thisPlace?.latitude}
                <br/>
                Longitude: {props?.thisPlace?.longitude}
            </p>
            <p>
                More info: <a href={props?.thisPlace?.info_link}>{props?.thisPlace?.info_link}</a>
            </p>
        </>
    )
}
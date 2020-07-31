export const convertLat = (latitude) => {
    if(latitude.match(/\d+/g)[2]){
        return((+(latitude.match(/\d+/g)[0]) + (+(latitude.match(/\d+/g)[1])/60) + (+(latitude.match(/\d+/g)[2])/3600)))
    } else if(latitude.match(/\d+/g)[1]) {
        return((+(latitude.match(/\d+/g)[0]) + (+(latitude.match(/\d+/g)[1])/60)))
    } else {
        return(+(latitude.match(/\d+/g)[0]))
    }
}

export const convertLong = (longitude) => {
    if((longitude.match(/\d+/g)[2])){
        return(-1 * (+(longitude.match(/\d+/g)[0]) + (+(longitude.match(/\d+/g)[1])/60) + (+(longitude.match(/\d+/g)[2])/3600)))
    } else if (longitude.match(/\d+/g)[1]) {
        return(-1 * (+(longitude.match(/\d+/g)[0]) + (+(longitude.match(/\d+/g)[1])/60)))
    } else {
        return(-1 * (+(longitude.match(/\d+/g)[0])))
    }

}
import React, { useState, useEffect } from 'react';
import { ReactComponent as Star } from "../../style/images/icons/star.svg";
import { ReactComponent as FilledStar } from "../../style/images/icons/star-filled.svg"
import "./toggleStar.scss";

function ToggleStar(props) {

    const [addToFavourite, setAddToFavourite] = useState(false);
    let location = props.location;

    //handle the star immediately after rendering the home page
    useEffect(() => {
        let favLocations = JSON.parse(localStorage.getItem("favLocations"));
        for (let key in favLocations){
            if (favLocations[key].latitude === location.latitude && favLocations[key].longitude === location.longitude) {
                setAddToFavourite(true);
            }
        }
    },[]);

    const handleFavourites = () => {
        setAddToFavourite(!addToFavourite);
        let favLocations = localStorage.getItem("favLocations");
        let favLocationsArr = favLocations ? JSON.parse(localStorage.getItem("favLocations")) : [];
        //turning on the star
        if(!addToFavourite){
            favLocationsArr.push(location);
        }
        //turning off the star
        else {
            let index;
            for (let key in favLocationsArr) {
               if (favLocationsArr[key].latitude === location.latitude && favLocationsArr[key].longitude === location.longitude)
                   index = key;
            }
            favLocationsArr.splice(index, 1);
        }
        
        localStorage.setItem( 'favLocations', JSON.stringify(favLocationsArr));
    }
    
    return (
        <div className="wrapper" onClick={handleFavourites}>
            {
                addToFavourite ?
                    <FilledStar/>
                :
                    <Star/>
            }
        </div>
    )
}

export default ToggleStar;
import React, { useState, useEffect } from 'react';
import FavCard from './../../components/favCard/FavCard';
import "./favourite.scss";

function Favourite() {

    const [favData, setFavData] = useState(null);
    const favLocation = JSON.parse(localStorage.getItem("favLocations"));

    useEffect( () => {
        if (favLocation.length !==0) {
            for(let key in favLocation) {
                console.log("fav", favLocation[key]);
                const axios = require('axios');
                axios.get(`/api/location?lat=${favLocation[key].latitude}&long=${favLocation[key].longitude}`)
                .then( response => {
                    console.log("in the favourite",response.data);
                    setFavData([{weatherData:response.data.weatherData, locationData: response.data.locationData}]);
                })
                .catch( error => {
                    console.log(error);
                })
            }
        }
    },[])

    return (
        <div className="favourite-page">
            {
                favLocation.length !==0 ?
                    favData ?
                        favData.map((data, index) => (
                            <FavCard data={data} key={index}/>
                        ))
                    :<div>LOADING....</div>
                : <span className="no-item">هیچ موردی یافت نشد</span>
            }
        </div>
    )
}

export default Favourite;
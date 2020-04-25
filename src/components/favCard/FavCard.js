import React, { useState, useEffect, useContext } from 'react';
import "./favCard.scss";
import {PageContext} from '../../store/PageContext';
import WeatherIcon from './../weatherIcon/WeatherIcon';

function FavCard (props) {

    const [favResult, setFavResult]= useState(null);
    const {page, setPage} = useContext(PageContext);

    useEffect( () => {
        const axios = require('axios');
        axios.get(`/api/location?lat=${props.data.latitude}&long=${props.data.longitude}`)
        .then( response => {
            console.log("in the favourite",response.data);
            setFavResult(response.data);
        })
        .catch( error => {
            console.log(error);
        })
    },[]);

    const handleClick = (location) => {
        console.log("hiii", location)
        setPage({number: 0});
        localStorage.setItem("location", JSON.stringify(location));
    };
    
    return (
        <div className="card" onClick={() => handleClick(props.data)}>
            {favResult ?
                <React.Fragment>
                    <div className="weather-icon">
                        <WeatherIcon weather={favResult.weatherData.icon}/>
                    </div>
                    <div className="city-title">{favResult.locationData.city || favResult.locationData.county}</div>
                    <div className="temp">{props.toPersianDigits(Math.round(favResult.weatherData.temperature).toString())}</div>
                    <div className="weather">
                        <div>
                            <span className="icon-down"></span>
                            <span className="min-temp">{props.toPersianDigits(Math.round(favResult.weatherData.lowestTemp).toString())}</span>
                        </div>
                        <div>
                            <span className="icon-up"></span>
                            <span className="max-temp">{props.toPersianDigits(Math.round(favResult.weatherData.highestTemp).toString())}</span>
                        </div>
                    </div>
                </React.Fragment>
            :<div>LOADING....</div>
            }
        </div>
    )                
};

export default FavCard;
import React from 'react';
import "./favCard.scss";
import WeatherIcon from './../weatherIcon/WeatherIcon';

function FavCard (props) {
    
    return(
        <div className="card">
            {console.log('props in fav card',props.data)}
            <div className="weather-icon">
                <WeatherIcon weather={props.data.weatherData.icon}/>
            </div>
            <span className="city-title">{props.data.locationData.county}</span>
            <span className="temp">{Math.round(props.data.weatherData.temperature)}</span>
            <div className="weather">
                <div>
                    <span className="icon-down"></span>
                    <span className="min-temp">{Math.round(props.data.weatherData.lowestTemp)}</span>
                </div>
                <div>
                    <span className="icon-up"></span>
                    <span className="max-temp">{Math.round(props.data.weatherData.highestTemp)}</span>
                </div>
            </div>
        </div>
    )
}

export default FavCard;
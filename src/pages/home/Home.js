import React, {useState, useEffect} from 'react';
import "./home.scss";
import { DailyDataContext } from "../../store/DailyDataContext"
import ToggleStar from "./../../components/toggleStar/ToggleStar";
import Location from './../../components/location/Location';
import WeatherIcon from './../../components/weatherIcon/WeatherIcon';
import City from '../../components/city/City';
import WeatherTitle from '../../components/weatherTitle/WeatherTitle';
import Date from './../../components/date/Date';
import Carousel from './../../components/carousel/Carousel';

function Home() {

    const [dailyData, setDailyData] = useState(null);
    const [location, setLocation] = useState(JSON.parse(localStorage.getItem("location")));

    useEffect (() => {
        if(location) {
            const axios = require('axios');
            axios.get(`/api/location?lat=${location.latitude}&long=${location.longitude}`)
            .then( response => {
                console.log("in the home",response.data);
                localStorage.setItem('location', JSON.stringify(location));
                setDailyData({data:response.data});
            })
            .catch( error => {
                console.log(error);
            })
        }
    },[location]);
 
   const handleChange = (result) => {
        setLocation({latitude: result.latitude, longitude: result.longitude});
   };

    return (
        <DailyDataContext.Provider value={{dailyData, setDailyData}}>
            <React.Fragment>
                {
                    localStorage.getItem("location") ?
                        (dailyData) ?
                                <div className="home-page">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 689" className="wave">
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="HomeScreen">
                                                <path d="M750,39.1V689H0V25.5c18.2-3.7,33.5-7.6,48-11.2C91.3,3.4,103.6,0,189,0c37.5,4,73.3,15.1,104.5,26.6s57.9,23.3,77,28.8c37.7,10.8,76.6,21.9,153.2,22h.3c76.4,0,115.3-11.1,152.9-21.8A573.83,573.83,0,0,1,750,39.1Z" style={{fill: 'white', opacity:"0.6"}}/>
                                                <path d="M0,39.1V689H750V25.5c-18.2-3.7-33.5-7.6-48-11.2C658.7,3.4,646.4,0,561,0c-37.5,4-73.3,15.1-104.5,26.6s-57.9,23.3-77,28.8c-37.7,10.8-76.6,21.9-153.2,22H226c-76.4,0-115.3-11.1-152.9-21.8A573.83,573.83,0,0,0,0,39.1Z" style={{fill: 'white', opacity:"0.5"}}/>
                                                <path d="M750,67.2c-38.2-5.5-64.2-12.4-87.8-18.8C621.4,37.4,586.1,28,505.5,28h-.4c-73.6,0-111,11.5-147.2,22.6-35.5,10.9-72.3,22.1-144.5,22.1h-.3c-72,0-108.7-11.2-144.2-22A547.67,547.67,0,0,0,0,34.2V689H750" style={{fill: "white"}}/>
                                            </g>
                                        </g>
                                    </svg>
                                    <ToggleStar location={location}/>
                                    <div className="weather-icon-wrapper">
                                        <WeatherIcon weather={dailyData.data.weatherData.icon}/>
                                    </div>
                                    <City province={dailyData.data.locationData.province}/>
                                    <div className="info">
                                        <span className="city-name">{dailyData.data.locationData.county}</span>
                                        <div className="date">
                                            <Date time={dailyData.data.weatherData.time}/>
                                        </div>
                                        <div className="weather">
                                            <WeatherTitle title={dailyData.data.weatherData.icon}/>
                                            <span className="icon-down"></span>
                                            <span className="min-temp">{Math.round(dailyData.data.weatherData.lowestTemp)}</span>
                                            <span className="icon-up"></span>
                                            <span className="max-temp">{Math.round(dailyData.data.weatherData.highestTemp)}</span>
                                        </div>
                                    </div>
                                    <Carousel temps={Math.round(dailyData.data.weatherData.temperature)}/>
                                </div>
                                :
                                <div>LOADING...</div>
                        :
                        <Location setLocation={setLocation} location={location} onChange={handleChange} />}
            </React.Fragment>
        </DailyDataContext.Provider>
    )
}

export default Home;
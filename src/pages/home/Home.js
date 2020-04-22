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
                                    <ToggleStar location={location}/>
                                    <div className="weather-icon-wrapper">
                                        <WeatherIcon weather={dailyData.data.weatherData.icon}/>
                                    </div>
                                    <City province={dailyData.data.locationData.province}/>

                                    <div className="info">
                                        <div className="city-name">{dailyData.data.locationData.city || dailyData.data.locationData.county}</div>
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
                                        <Carousel temps={Math.round(dailyData.data.weatherData.temperature)}/>
                                    </div>
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
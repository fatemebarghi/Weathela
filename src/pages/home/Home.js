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
import { useApi } from './../../customHooks/UseApi';

function Home(props) {

    

    const [dailyData, setDailyData] = useState(null);
    const [location, setLocation] = useState(JSON.parse(localStorage.getItem("location")));
    const [response, error] = useApi("GET", `/location?lat=${location.latitude}&long=${location.longitude}`)

    useEffect (() => {
        // if(location) {
        //     const axios = require('axios');
        //     axios.get(`/api/location?lat=${location.latitude}&long=${location.longitude}`)
        //     .then( response => {
        //         console.log("in the home",response.data);
        //         localStorage.setItem('location', JSON.stringify(location));
        //         setDailyData({data:response.data});
        //     })
        //     .catch( error => {
        //         console.log(error);
        //     });
        // }
        if(response) {
            setDailyData(response);
        }
    },[location, response, error]);
 
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
                                        <WeatherIcon weather={dailyData.weatherData.icon}/>
                                    </div>
                                    <City province={dailyData.locationData.province}/>
                                    <div className="top-info">
                                        <div className="city-name">{dailyData.locationData.city || dailyData.locationData.county}</div>
                                        <div className="temprature">{Math.round(dailyData.weatherData.temperature).toString()}</div>
                                    </div>

                                    <div className="bottom-info">
                                        <div>
                                            <div className="date">
                                                <Date time={dailyData.weatherData.time}/>
                                            </div>
                                            <div className="weather">
                                                <WeatherTitle title={dailyData.weatherData.icon}/>
                                                <span className="icon-down"></span>
                                                <span className="min-temp">{props.toPersianDigits(Math.round(dailyData.weatherData.lowestTemp).toString())}</span>
                                                <span className="icon-up"></span>
                                                <span className="max-temp">{props.toPersianDigits(Math.round(dailyData.weatherData.highestTemp).toString())}</span>
                                            </div>
                                        </div>
                                        <Carousel temps={props.toPersianDigits(Math.round(dailyData.weatherData.temperature).toString())}/>
                                    </div>
                                </div>
                                :
                                <div>LOADING...</div>
                        :
                        <Location setLocation={setLocation} location={location} onChange={handleChange} />}
            </React.Fragment>
        </DailyDataContext.Provider>
    )
};

export default Home;


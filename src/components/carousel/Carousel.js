import React from 'react';
import WeatherIcon from './../weatherIcon/WeatherIcon';
import persianDate  from 'persian-date';
import "./carousel.scss";

function Carousel(props) {
    // const timeStamp = new persianDate(props.time).format('dddd  |  DD MMMM');

    return (
        <div className="carousel" >
        {console.log("data in carousel", props)}
                {
                    props.hourlyTemp.map((item, index) => (
                        <div className="item" key={index}>
                            <div className="temp">{props.toPersianDigits(Math.round(item.temperature).toString())}</div>
                            <div className="weather-icon">
                                <WeatherIcon weather={item.icon}/>
                            </div>
                            <div className="hour">{new persianDate(item.time).format('hh:mm')}</div>
                        </div>
                    ))
                }
        </div>
    )
};

export default Carousel;
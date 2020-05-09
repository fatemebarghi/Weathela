import React from 'react';
import WeatherIcon from './../weatherIcon/WeatherIcon';
import "./carousel.scss";

function Carousel() {

    const hourlyTemp= [{hour: '01:00', temp: 29}, {hour: '02:00', temp: 29}, {hour: '10:00', temp: 29}, 
                       {hour: '10:00', temp: 29}, {hour: '10:00', temp: 29}, {hour: '10:00', temp: 29}, 
                       {hour: '10:00', temp: 29}, {hour: '10:00', temp: 29}, {hour: '10:00', temp: 29},
                       {hour: '10:00', temp: 29}, {hour: '10:00', temp: 29}, {hour: '10:00', temp: 29},
                       {hour: '10:00', temp: 29}, {hour: '10:00', temp: 29}, {hour: '12:00', temp: 29}
                    ]

    return (
        <div className="carousel" >
                {
                    hourlyTemp.map(item => (
                        <div className="item" key={item.hour}>
                            <div className="temp">{item.temp}</div>
                            <div className="weather-icon">
                                <WeatherIcon weather={"partly-cloudy-night"}/>
                            </div>
                            <div className="hour">{item.hour}</div>
                        </div>
                    ))
                }
        </div>
    )
};

export default Carousel;
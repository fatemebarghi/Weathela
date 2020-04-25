import React from 'react';

function WeatherTitle(props) {

    const WeatherState = {
        "clear-day":"آسمان صاف",
        "clear-night":"آسمان صاف",
        "cloudy":"ابری",
        "fog":"مه",
        "partly-cloudy-day":"نیمه ابری",
        "partly-cloudy-night":"نیمه ابری",
        "rain":"بارانی",
        "snow":"برفی",
        "sleet":"برف و باران",
        "wind":"وزش باد",
    };

    return(
        <span className="title">{WeatherState[props.title]}</span>
    )
};

export default WeatherTitle;
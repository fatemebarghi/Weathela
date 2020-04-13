import React, {useState, useEffect, useContext} from 'react';
import { DailyDataContext } from "../../store/DailyDataContext";
import "./location.scss";

function Location() {

    const [location, setLocation] = useState({latitude:'', longitude:''});
    const { setDailyData } = useContext(DailyDataContext);

    useEffect(() => {
        const axios = require('axios');
        axios.get(`/api/location?lat=${location.latitude}&long=${location.longitude}`)
        .then( response => {
            console.log(response);
            localStorage.setItem('location', JSON.stringify(location));
            setDailyData({data:response.data})
        })
        .catch( error => {
            console.log(error);
        })
    }, [location])

    const getLocation = () => {

       if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(success);
       }
       else {
           console.log("error")
       }
    }

    const success = (position) => {
        setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
    }    

    return(
        <div className="location">
            <h4>برای شروع موقعیت مکانی خود را فعال کنید</h4>
            <button className="button" onClick={getLocation}>شروع</button>
        </div>
    )
}

export default Location;
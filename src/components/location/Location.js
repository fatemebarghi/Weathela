import React from 'react';
import "./location.scss";

function Location(props) {

    const getLocation = () => {
       if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(success);
       }
       else {
           console.log("error in location component");
       }
    };

    const success = (position) => {
        props.setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
    };

    return(
        <div className="location">
            <h4>برای شروع موقعیت مکانی خود را فعال کنید</h4>
            <button className="button" onClick={getLocation}>شروع</button>
        </div>
    )
}

export default Location;
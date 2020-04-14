import React, {useState, useEffect} from 'react';
import "./location.scss";

function Location(props) {

    // const [location, setLocation] = useState(props);

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

    // useEffect(() => {
    //     props.onChange(location);
    // },[location]);

    return(
        <div className="location">
            <h4>برای شروع موقعیت مکانی خود را فعال کنید</h4>
            <button className="button" onClick={getLocation}>شروع</button>
        </div>
    )
}

export default Location;
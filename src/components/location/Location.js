import React, {useState} from 'react';
import "./location.scss";

function Location() {

    const [location, setLocation] = useState({latitude:null, longitude:null});

    const getLocation = () => {
        console.log("hi")
       if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(success);
             console.log(navigator.geolocation);
       }
       else {
           console.log("error")
       }
    }

    const success = (position) => {
        console.log(position)
        setLocation({latitude: position.coords.latitude, longitude:position.coords.longitude});
        console.log(location);
    }    

    return(
        <div className="location">
            <h4>برای شروع موقعیت مکانی خود را فعال کنید</h4>
            <button className="button" onClick={getLocation}>شروع</button>
        </div>
    )
}

export default Location;
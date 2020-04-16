import React from 'react';
import "./toggleStar.scss";

function ToggleStar(props) {
    
    return (
        <div className="wrapper" onClick={props.onClick}>
            {
                props.active ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.19 70.2"><defs><style>.cls-1</style></defs><title>star-filled</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" fill="#fed330" d="M70.1,26.4a1.87,1.87,0,0,1-.4,1.9L55.2,43.2A4.42,4.42,0,0,0,54,47l3.5,20.9a2,2,0,0,1-.7,1.8,1.42,1.42,0,0,1-1.6.1L37.2,60a4.07,4.07,0,0,0-4,0L15.3,70a1.42,1.42,0,0,1-1.6-.1,1.72,1.72,0,0,1-.7-1.8l3.3-20.9a4.42,4.42,0,0,0-1.2-3.8L.5,28.7a1.87,1.87,0,0,1-.4-1.9,1.48,1.48,0,0,1,1.3-1.1l20.1-3.2a4.18,4.18,0,0,0,3.2-2.4L33.6,1A1.61,1.61,0,0,1,35,0h0a1.57,1.57,0,0,1,1.4.9l9.1,19a4.18,4.18,0,0,0,3.2,2.4l20.1,2.9A1.6,1.6,0,0,1,70.1,26.4Z"/></g></g></svg>
                :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.19 73.2"><defs><style>.cls-1</style></defs><title>star</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" fill="#7c796d" stroke="#fed330" strokeMiterlimit="10" strokeWidth="3px" d="M71.6,27.9a1.87,1.87,0,0,1-.4,1.9L56.7,44.7a4.42,4.42,0,0,0-1.2,3.8L59,69.4a2,2,0,0,1-.7,1.8,1.42,1.42,0,0,1-1.6.1l-18-9.8a4.07,4.07,0,0,0-4,0l-17.9,10a1.42,1.42,0,0,1-1.6-.1,1.72,1.72,0,0,1-.7-1.8l3.3-20.9a4.42,4.42,0,0,0-1.2-3.8L2,30.2a1.87,1.87,0,0,1-.4-1.9,1.48,1.48,0,0,1,1.3-1.1L23,24a4.18,4.18,0,0,0,3.2-2.4L35.1,2.5a1.61,1.61,0,0,1,1.4-1h0a1.57,1.57,0,0,1,1.4.9l9.1,19a4.18,4.18,0,0,0,3.2,2.4l20.1,2.9A1.6,1.6,0,0,1,71.6,27.9Z"/></g></g></svg>
            }
        </div>
    )
}

export default ToggleStar;
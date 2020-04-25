import React from 'react';
import "./carousel.scss";

function Carousel(props) {
    return (
        <div className="carousel">
            <span className="temp">
                {props.temps}
            </span>
        </div>
    )
};

export default Carousel;
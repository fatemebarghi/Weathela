import React from 'react';
import "./carousel.scss";

function Carousel(props) {
    return (
        <div className="carousel">
            {props.temps}
        </div>
    )
}

export default Carousel;
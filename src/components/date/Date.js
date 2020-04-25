import React from 'react';
import persianDate  from 'persian-date';

function Date (props) {
    const timeStamp = new persianDate(props.time).format('dddd  |  DD MMMM');
    return(
        <span>
            {timeStamp}
        </span>
        
    )
};

export default Date;
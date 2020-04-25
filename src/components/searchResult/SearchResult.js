import React, { useContext } from 'react';
import {PageContext} from '../../store/PageContext';
import "./searchResult.scss";

function SearchResult (props) {

    const {page, setPage} = useContext(PageContext);

    const handleClick = (location) => {
        console.log("location search result", location);
        setPage({number: 0});
        localStorage.setItem("location", JSON.stringify(location));
    };

    return(
        <div className="result" onClick={() => handleClick(props.data.location)}>
        {console.log('prooops',props.data)}
            <span className="city">{props.data.city || props.data.county}</span>
            <span className="county"> {props.data.county},</span>
            <span className="province">{props.data.province}</span>
        </div>
    )
};

export default SearchResult;
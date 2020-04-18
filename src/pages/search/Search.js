import React from 'react';
import { ReactComponent as SearchIcon } from "../../style/images/icons/Weather_MenuBar_Search-Filled.svg";
import "./search.scss";

function Search() {
    return (
        <div className="search-page">
            <div className="search-bar">
                <input  type="text" placeholder="نام شهر موردنظر خود را وارد کنید..."></input>
                <button className="button">
                    <SearchIcon/>
                </button>
            </div>
            <div className="result-wrapper">
            <div className="result">
                <span className="city">برازجان</span>
                <span className="county"> دشتستان,</span>
                <span className="province">بوشهر</span>
            </div>
            <div className="result">
                <span className="city">برازجان</span>
                <span className="county"> دشتستان,</span>
                <span className="province">بوشهر</span>
            </div>
            <div className="result">
                <span className="city">برازجان</span>
                <span className="county"> دشتستان,</span>
                <span className="province">بوشهر</span>
            </div>
            </div>
            
        </div>
    )
}

export default Search;
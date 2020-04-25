import React, {useState} from 'react';
import { ReactComponent as SearchIcon } from "../../style/images/icons/Weather_MenuBar_Search-Filled.svg";
import SearchResult from './../../components/searchResult/SearchResult';
import "./search.scss";

function Search() {

    const [searchValue, setSearchValue] = useState({text:""});
    const [result, setResult] = useState(null);

    const handleUpdate = (e) => {
        setSearchValue({text: e.target.value});
    };

    const handleClick = () => {
        if (searchValue.text) {
            const axios = require('axios');
            axios.post (" /api/search", searchValue)
            .then( response => {
                console.log(response.data);
                setResult(response.data);
            })
            .catch( error => {
                console.log(error);
            });
        };
    };

    return (
        <div className="search-page">
            <div className="search-bar">
                <input  type="text" value={searchValue.text} onChange={handleUpdate} placeholder="نام شهر موردنظر خود را وارد کنید..."></input>
                <button className="button" onClick={handleClick}>
                    <SearchIcon/>
                </button>
            </div>
            {   
                searchValue ?
                    result ?
                    <div className="result-wrapper">
                        {result.map(( data, index) => (
                            <SearchResult data={data} key={index}/>
                        ))}
                    </div>
                    : <div>nothing</div>
                : <div>loading ...</div>
            }
            
        </div>
    )
};

export default Search;
import React, {useState, useEffect} from 'react';
import axios from "axios";

export const useApi = (method, url, data) => {

    const baseUrl = "/api";
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect( () => {
        switch(method) {
            case "GET":
                axiosGet(url);
            case "POST":
                axiosPost(url, data);
            default:
                setError("Method is not defined");
        }
    }, []);

    const axiosGet = () => {
        axios.get(baseUrl + url)
            .then(result => {
                setResponse(result.data);
            })
            .catch(error => {
                setError(error);
            });
    };

    const axiosPost = () => {
        axios.post(baseUrl + url, data)
            .then(result => {
                setResponse(result);
            })
            .catch(error => {
                setError(error);
            });
    };

    return [response, error];
};
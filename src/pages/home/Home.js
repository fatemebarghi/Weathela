import React from 'react';
function Home() {

    // NOTE: I've added this function and a button to test the api call to the server. It can be deleted

    // const apiCall = (e) => {
    //     e.preventDefault();
    //     const axios = require('axios');
    //     console.log("clicked");
    //     axios.get("/data")
    //         .then((result) => {
    //             console.log(result);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };
    return (
        <React.Fragment>
           <h1>this is home page</h1>
            {/*<button onClick={apiCall}>click me!</button>*/}
        </React.Fragment>
    )
}

export default Home;
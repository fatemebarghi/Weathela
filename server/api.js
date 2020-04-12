var apiRouter = require('express').Router();
var axios = require('axios');

apiRouter.get("/location", function (req, res) {
    var latitude = req.query.lat;
    var longtitude = req.query.long;
    var locationData = {
        city: "",
        county: "",
        province: ""
    };
    var weatherData = {};
    console.log(latitude, longtitude);
    var config = {
        headers : {
            'x-api-key': process.env.MAP_KEY
        }
    };
    axios.get(process.env.MAP_URL + "/fast-reverse?lat="+ latitude +"&lon=" + longtitude, config)
        .then(function (result) {
            // console.log(result);
            locationData = {
                city: result.data.city,
                county: result.data.county,
                province: result.data.province
            };
            getWeatherData();
            // res.send(result.data);
        })
        .catch(function (error) {
            console.log(error);
            res.status(500).send(error);
        });
    function getWeatherData() {
        axios.get(process.env.WEATHER_URL + "/forecast/" + process.env.WEATHER_KEY + "/" + latitude + "," + longtitude + "?exclude=[minutely,hourly,alerts,flags]&units=ca")
            .then(function (result) {
                // console.log(result);
                weatherData = {
                    time: result.data.currently.time * 1000,
                    icon: result.data.currently.icon,
                    temperature: result.data.currently.temperature,
                    highestTemp: result.data.daily.data[0].temperatureHigh,
                    lowestTemp: result.data.daily.data[0].temperatureLow
                };
                // console.log(weatherData)
                res.send({locationData: locationData, weatherData: weatherData});
            })
            .catch(function (error) {
                console.log(error);
                res.status(500).send(error);
            })
    }
    // axios.get('https://api.darksky.net/forecast/'+process.env.DARK_SKY_KEY+'/37.8267,-122.4233')
    //     .then((result) => {
    //         console.log(result);
    //         res.send(result.data);
    //     })
    //     .catch((error) => {
    //         res.status(500).send(error);
    //     });
   // res.send(jsonData);
});

module.exports = apiRouter;
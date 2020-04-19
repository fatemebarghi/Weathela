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
});

apiRouter.post("/search", function (req, res) {
    console.log(req.body.text);
    var text = req.body.text;
    var config = {
        headers : {
            'x-api-key': process.env.MAP_KEY,
            'Content-Type': 'application/json'
        }
    };
    var input = {
        text: text,
        "$select": "county, city"
    };
    axios.post(process.env.MAP_URL + "/search/v2", input, config)
        .then(function (result) {
            var data = result.data.value;
            var newData = [];
            for(var i=0; i<data.length; i++){
                newData.push({
                    city: data[i].city,
                    county: data[i].county,
                    province: data[i].province,
                    location: {latitude: data[i].geom.coordinates[0], longitude: data[i].geom.coordinates[1]}
                });
            }
            res.send(newData);
        })
        .catch(function (error) {
            console.log(error);
            res.status(500).send(error);
        });
});

module.exports = apiRouter;
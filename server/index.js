var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var app = express();
var jsonData = {};

app.use(express.static('build'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/data', function (req, res) {
    axios.get('https://api.darksky.net/forecast/'+process.env.DARK_SKY_KEY+'/37.8267,-122.4233')
        .then((result) => {
            console.log(result);
            res.send(result.data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
   // res.send(jsonData);
});

app.listen(3001, function () {
    console.log("Listening on port 3001");
});
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var apiRouter = require("./api");
var port = process.env.PORT || 3001;


app.use(express.static('build'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/', apiRouter);


app.listen(port, function () {
    console.log("Listening on port 3001");
});
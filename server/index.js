var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var apiRouter = require("./api");


// app.use(express.static('build'));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use('/api/', apiRouter);
app.get('/', function (req, res) {
res.send(JSON.stringify({ Hello: 'World'}));
});


app.listen(3001, function () {
    console.log("Listening on port 3001");
});
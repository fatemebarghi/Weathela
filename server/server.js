var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var app = express();
var jsonData = {};

app.use(express.static('build'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.get('/', function (req, res) {
//     // app.use(express.static('src'));
//     var htmlFile = fs.readFile("./index.html");
//     res.sendFile(__dirname + "/index.html", function (err) {
//         if(err){
//             res.status(500).send(err);
//         }
//     });
// });
app.get('/data', function (req, res) {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
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
var express = require('express');
var cors = require('cors');
var mocks = require('./mocks/mocks');

var app = express();

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/game', function (req, res) {
    res.send(mocks.game);
});

app.get('/login', function (req, res) {
    res.send(mocks.login);
});

app.get('/letter', function (req, res) {
    res.send(mocks.letter);
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});
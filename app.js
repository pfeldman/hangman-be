var express = require('express');
var cors = require('cors');
var mocks = require('./mocks/mocks');

var app = express();

app.use(cors());
app.set('port', (process.env.PORT || 4000));

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

app.listen(app.get('port'), function () {
    console.log('Example app listening on port' + app.get('port'));
});
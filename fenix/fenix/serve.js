var express = require('express');

var app = express();
app.use('/', express.static('src/'));
app.use('/assets', express.static('../assets/'));
app.use('/bower_components', express.static('../bower_components/'));
var http   = require('http').Server(app);


var bodyParser       = require('body-parser');
var jsonParser       = bodyParser.json();
var urlencodedParser = app.use(bodyParser.urlencoded({extended: true}));

var tickets = [];

http.listen(8080, function () {
    'use strict';
    console.log('Connect to port 8080');
});
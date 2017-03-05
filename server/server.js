'use strict';

var express = require('express');
var routes = require('./routes/index.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

const bodyParser = require('body-parser');

var app = express();
require('dotenv').load();
require('./config/passport')(passport);

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(session({
	secret: 'secretClementine',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
'use strict';

var express = require('express');
var routes = require('./routes/index.js');
var mongoose = require('mongoose');
var session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();
require('dotenv').config({ silent: true });

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

routes(app);

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Node.js listening on port ' + port + '...');
});

var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

/* --------------- */
/*  Configuration  */
/* --------------- */

// mongoDB database
mongoose.connect('mongodb://node:node@waffle.modulusmongo.net:27017/m3uJopid');

// static files location: /public
app.use(express.static(__dirname + '/public'));
// log every request to the console
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

/* App listening */
app.listen(8080);
console.log("App listening on port 8080");
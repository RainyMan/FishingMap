var express = require('express');
var app = express();
//var port = process.env.PORT || 8080;
var ADDRESS = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var notification = require('push.js');


var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
app.use(express.static('info'));

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));

app.set('view engine', 'ejs');


// app.use('/', function(req, res){
// 	res.send('Our First Express program!');
// 	console.log(req.cookies);
// 	console.log('================');
// 	console.log(req.session);
// });

require('./app/routes.js')(app);

app.listen(PORT, ADDRESS, function(){
    console.log('Server running on port: ' + PORT);
  });






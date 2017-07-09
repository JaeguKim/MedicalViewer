var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
const session = require('express-session');

app.use(express.static('public'));
app.use(express.static('views'));

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

// DEFINE MODEL
var user = require('./models/user');

mongoose.connect('mongodb://localhost/mongodb_tutorial');

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//session 설정
app.use(session({
    secret: 'ambc@!vsmkv#!&*!#EDNAnsv#!$()_*#@',
    resave: false,
    saveUninitialized: true
}));

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;

// [CONFIGURE ROUTER]
var router = require('./routes')(app, user);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// [RUN SERVER]
var server = app.listen(port, function(){
    console.log("Express server has started on port 8080");
});

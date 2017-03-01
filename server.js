const path = require('path');
const http = require('http');
var express= require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var session = require('express-session');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
var passport = require('passport');
var flash = require('connect-flash');

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rateme');


// Get our API routes
const api = require('./server/routes/api');

// Parsers for POST data

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(session({
  secret: 'teskey',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

// Response flash message
app.use(flash());

// Init passportjs
app.use(passport.initialize());
app.use(passport.session());

// Init expressjs validator
app.use(validator());









// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

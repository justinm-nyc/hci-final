var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.get('/register', function(req, res) {
  res.render('register');
});

app.get('/register_v2?', function(req, res) {
  res.render('register_v2?');
});

app.get('/register_v3', function(req, res) {
  res.render('register_v3');
});

app.get('/register_v4', function(req, res) {
  res.render('register_v4');
});

app.get('/register_v5', function(req, res) {
  res.render('register_v5');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/contact', function(req, res) {
  res.render('contact');
});

app.get('/add_mood', function(req, res) {
  res.render('add_mood');
});

app.get('/am_redirect', function(req, res) {
  res.render('am_redirect');
});

app.get('/account_home', function(req, res) {
  res.render('account_home');
});

app.get('/account_settings', function(req, res) {
  res.render('account_settings');
});

app.get('/seedata', function(req, res) {
  res.render('seedata');
});

app.get('/expert_page', function(req, res) {
  res.render('expert_page');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

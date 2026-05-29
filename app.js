var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {message: err.message, error: err});
});

app.listen(8000)

module.exports = app;

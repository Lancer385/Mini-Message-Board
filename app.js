const express = require('express');
const path = require("node:path");
const { body, validationResult } = require("express-validator");
const createError = require('http-errors');
const indexRouter = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 8000;

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('partials/errorStatus', {message: err.message, error: err});
});

app.listen(PORT, (error) => {
    if (error) {
    throw error;
  }
  console.log(`listening to port ${PORT}`)
})

module.exports = app;

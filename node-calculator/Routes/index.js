const app = require('express')();
const calculate = require('./calculate');

app.use('/', calculate);

module.exports = app;

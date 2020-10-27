const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const studentsRoute = require('./routes/students')
app.use(bodyparser.json());
app.use("/students", studentsRoute);


module.exports = app
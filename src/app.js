require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const appCors = require('./network/cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);
appCors(app);

module.exports = app;

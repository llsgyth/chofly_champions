const express = require('express');
const { isDev } = require('../config');
let app;

app = app || express();
app.authUser = app.authUser || null;
app.isDev = isDev;

const Router = express.Router({mergeParams: true});

module.exports = { app, express, Router };
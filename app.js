'use strict'

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const getData = require('./controllers/getinfo')

let app = express();

app.set('port', process.env.PORT || 3000);
const PORT = app.get('port');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(require('./controllers/index'));
app.use(require('./controllers/getinfo'));
app.use(require('./controllers/fullPlot'))


app.listen(PORT, function(){
	console.log(`Running on port ${PORT}...`);
});
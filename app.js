'use strict'

const express = require('express');
const request = require('request');
const getData = require('./controllers/getinfo')

var bodyParser = require('body-parser');

let app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('<h1>Welcome to my site</h1>');
})

app.get('/star', function(req, res){
	getData(req, res);
})






app.listen(PORT, function(){
	console.log(`Running on port ${PORT}...`);
});
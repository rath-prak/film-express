'use strict'

const express = require('express');
const request = require('request');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const $ = require('cheerio');

const getData = require('./controllers/getinfo')

let app = express();

app.set('port', process.env.PORT || 3000);
const PORT = app.get('port');
app.set('author', 'Rathania');

app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: '_layout', layoutsDir:__dirname + '/views/layouts'}));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/index'));
app.use(require('./controllers/getinfo'));
app.use(require('./controllers/fullPlot'));
app.use(require('./controllers/getActor'))

app.listen(PORT, function(){
	console.log(`Running on port ${PORT}...`);
});

'use strict'

const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/fullplot', function(req, res){
		request.get('http://www.omdbapi.com/?t=Rogue+One&y=&plot=full&r=json', function(error, response, data ){
			if(error){
				console.log(error)
			} else {
				let fullplot = JSON.parse(data).Plot
				res.send(fullplot)
			}
		})
});

module.exports = router

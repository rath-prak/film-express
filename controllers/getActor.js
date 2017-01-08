'use strict'

const express = require('express');
const request = require('request');
const $ = require('cheerio');
const router = express.Router();

router.get('/actors', function(req, res){

	// AJAX

	const actor = `Russell Crowe`;
	const rating = 8;

	res.render('./layouts/actors', {
		title: actor,
		popularity: rating
	})

})

module.exports = router

// 74d4d78f293267a7e850237f69ff3b2a

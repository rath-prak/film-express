const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
	var author = req.app.get('author');
	res.send(`<h1>Welcome to my site ${author}</h1>`);
})

module.exports = router
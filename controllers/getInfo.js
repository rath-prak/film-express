var request = require('request');

function getData(req, res){
		request('http://www.omdbapi.com/?t=Rogue+One&y=&plot=short&r=json', function(error, response, body){
		if(error){
			console.log(error)
		}else{
			var details = JSON.parse(body).Writer;
			console.log(details)
			res.send(`<h1 style="font, sans-serif"> ${details} </h1>`)
		}
	})
}

module.exports = getData
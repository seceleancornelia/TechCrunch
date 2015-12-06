var request = require('request');
var bodyParser = require("body-parser");
var express = require('express');
var wget = require('wget');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
var http = require('http').Server(app);

app.get('/', function (req, res) {
  console.log("pule");
});
app.post('/', function (req, res) {
  tag = req.body.tag;
  console.log(tag);
  downloadVideo(tag);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});	
function downloadVideo (tag) {

	var url = "http://api.5min.com/search/" + tag + "/videos.Json";

	request({
	    url: url,
	    json: true
	}, function (error, response, body) {

	    if (!error && response.statusCode === 200) {
	        var file = JSON.parse(JSON.stringify(body));
	        var items = file.items;

	    	console.log(items[1].videoUrl);
	    	var source = items[1].videoUrl;
	    	var video = 'video.mp4';

	    	wget.download(source, video);
	    }
	});
}

// downloadVideo("cats");
// makeServer();

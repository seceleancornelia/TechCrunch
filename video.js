var request = require('request');

var url = "http://api.5min.com/search/cats/videos.Json";

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        var file = JSON.parse(JSON.stringify(body));
        var items = file.items;

    	console.log(items[1].videoUrl);
    	var wget = require('wget');
    	var source = items[1].videoUrl;
    	var video = 'video.mp4';

    	wget.download(source, video);
    }
});
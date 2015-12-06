var wget = require('wget');

var source = "http://avideos.5min.com//888/5190888/519088747_2.mp4";    	
var video = 'birds.mp4';
wget.download(source, video);
var fs = require('fs');
var gm = require('gm');
require('gm-buffer');

var dictionaryPath = __dirname + '/nouns.txt';
var imagePath = __dirname + '/image.png';

module.exports = new randomWordChooser();

function randomWordChooser() {
	var self = this;
	var words = undefined;

	self.showAll = function() {
		return words.join('\n');
	}

	self.get = function () {
		var i = Math.floor(Math.random() * words.length);
		return words[i];
	}

	self.getAsImage = function (fontPath, fontSize, callback) {	
		var word = this.get();		
		gm(imagePath)
			.resize(200, 50, '!')
			.font(fontPath, fontSize)
			.gravity('Center')
			.drawText(0, 0 , word)
			.buffer(callback);
	}

	fs.readFile(dictionaryPath, 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}

		var cr = data.indexOf('\r');
		var lf = data.indexOf('\n');
		var crlf = data.indexOf('\r\n');
		var s = '';

		if(cr === crlf && cr >=0 ) {
			s = '\r\n';
		}
		else if(lf >= 0) {
			s = '\n';
		}
		else if(cr >= 0) {
			s = '\r';
		}

		words = data.split(s);
	});
}
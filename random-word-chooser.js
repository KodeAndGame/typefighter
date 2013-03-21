var fs = require('fs');

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

	fs.readFile('./nouns.txt', 'utf8', function (err,data) {
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
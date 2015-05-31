var fs = require('fs');
var split = require('split');

var dictionaryPath = __dirname + '/nouns.txt';

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

	self.getAt = function(i) {
		return words[i];
	}

	var words = [];
	fs.createReadStream(dictionaryPath)
		.pipe(split())
		.on('data', function(line) {
			words.push(line);
		});
}
var fs = require('fs');
var split = require('split');

var dictionaryPath = __dirname + '/tf-dictionary/nouns.txt';

module.exports = new tfDictionary();

function tfDictionary() {
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
function Player() {
	this.words = new Array();
}

Player.prototype.addNewWord = function(word) {
	if(word && typeof word === 'string' && word.length > 0) {
		//sanitize word
		word = word.replace(/[^-a-z0-9\s]/gi, '').replace(/[_\s]/g, '-')

		//add to array of words
		this.words[this.words.length] = word;
	}
}

Player.prototype.getLastWords = function(count, separator) {
	var end = this.words.length + 1;
	var start = end - count;
	if(start < 0) {
		start = 0;
	}
	return this.words.slice(start).join(separator);
}
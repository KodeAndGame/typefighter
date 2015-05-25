function player() {
	
}

player.prototype.keyPressHandler = function (keyCode) {
	if(keyCode == 13) {
		return "<br/>";
	}
	else if(keyCode == 8) {
		return -1;
	}
	else if(e.keyCode >= 97 && e.keyCode <= 122) {
		return String.fromCharCode(e.keyCode);
	}
}
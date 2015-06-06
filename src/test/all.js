var wordChooser = require('../lib/words');

// using nodejs's build in asserts that throw on failure 
var assert = require('assert')
 
exports['test placeholder'] = function() {
  assert.equal(3+4, 7, 'should always pass');
}

/*
exports['test first word'] = function() {
  assert.equal(wordChooser.getAt(0), 'abbreviation', 'first word doesn\'t match');
}
*/
 
if (module == require.main) require('test').run(exports)
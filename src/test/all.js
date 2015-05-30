
// using nodejs's build in asserts that throw on failure 
var assert = require('assert')
 
exports['test placeholder'] = function() {
  assert.equal(3+4, 7, 'should always pass');
}
 
if (module == require.main) require('test').run(exports)
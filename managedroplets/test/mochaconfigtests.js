var config = require('./helper/config.js');
var testUtil = require('./helper/testutil.js');

describe('MochaTests', function () {
	describe('#should', function () {
		it('shouldEqual', function () {
			(2 + 2).should.equal(4);
		});
		it('shouldBeEmpty', function () {
			var tst = ([]).should.be.empty;
		});
		it('dotenvLoaded', function () {
			var tst = process.env.ADDRESS.should.not.be.undefined;
		});
	});
});
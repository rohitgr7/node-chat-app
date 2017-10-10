const expect = require('chai').expect;

const {
	isRealString
} = require('./validation');

describe('isRealString', () => {

	it('should reject non-string values', () => {
		const valid = isRealString(123);

		expect(valid).to.be.false;
	});

	it('should reject sting with only spaces', () => {
		const valid = isRealString('    ');

		expect(valid).to.be.false;
	});

	it('should allow string wih non-space characters', () => {
		const valid = isRealString('  Mark  ');

		expect(valid).to.be.true;
	});

});

const expect = require('chai').expect;

const {
	generateMessage
} = require('./message');
describe('generateMessage', () => {

	it('should generate correct message object', () => {
		const from = 'Mark';
		const text = 'Hey!';
		const message = generateMessage(from, text);

		expect(message).to.include({
			from,
			text
		});
		expect(message.createdAt).to.be.a('number');
	});

});

const expect = require('chai').expect;

const {
	generateMessage,
	generateLocationMessage
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

describe('generateLocationMessage' , () => {
	
	it('should generate correct location object' , () => {
		var from = 'Mark';
		var latitude = 15;
		var longitude = 19;
		var url = 'https://www.google.com/maps?q=15,19';
		var message = generateLocationMessage(from , latitude , longitude);
		
		expect(message.createdAt).to.be.a('number');
		expect(message).to.include({
			from, url
		});
	});
	
});

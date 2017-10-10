const expect = require('chai').expect;
const {
	Users
} = require('./users');

describe('Users', () => {
	var users;
	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Mark',
			room: 'Node Course'
		}, {
			id: '2',
			name: 'Steve',
			room: 'React Course'
		}, {
			id: '3',
			name: 'Frank',
			room: 'Node Course'
		}];
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '213',
			name: 'Mark',
			room: 'DBS'
		};

		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).to.eql([user]);
	});

	it('should return names for Node Course', () => {
		var userList = users.getUserList('Node Course');

		expect(userList).to.eql(['Mark', 'Frank']);
	});

	it('should return names for React Course', () => {
		var userList = users.getUserList('React Course');

		expect(userList).to.eql(['Steve']);
	});

	it('should remove a user', () => {
		var user = users.removeUser('2');

		expect(user.id).to.equal('2');
		expect(users.users.length).to.equal(2);
	});

	it('should not remove a user', () => {
		var user = users.removeUser('7');

		expect(user).to.be.undefined;
		expect(users.users.length).to.equal(3);
	});

	it('should find a user', () => {
		var user = users.getUser('2');

		expect(user).to.eql(users.users[1]);
	});

	it('should not find a user', () => {
		var user = users.getUser('4');

		expect(user).to.be.undefined;
	});

});

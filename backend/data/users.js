import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Alex Admine',
		email: 'test@test.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Simple User',
		email: 'simplet@test.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Jone User',
		email: 'simplet2@test.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Jane User',
		email: 'simplet3@test.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false,
	},
];

export default users;

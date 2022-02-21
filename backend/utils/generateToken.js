import jwt from 'jsonwebtoken';

const generateToke = (id) => {
	return jwt.sign({ id }, process.env.JWT_TOKEN, {
		expiresIn: '30d',
	});
};

export default generateToke;

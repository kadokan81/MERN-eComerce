import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1];
			const { id } = jwt.verify(token, process.env.JWT_TOKEN);

			req.user = await User.findById(id).select('-password');
		} catch (error) {
			console.error(error);
			res.status(401);
			throw new Error('Not authorized token');
		}
	}
	if (!token) {
		res.status(401);
		throw new Error('Not authorized token');
	}
	next();
});

export { protect };

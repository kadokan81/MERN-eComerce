import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import products from './data/products.js';
import users from './data/users.js';

import Order from './models/orderModel.js';
import Product from './models/productModel.js';
import User from './models/userModel.js';
import colors from 'colors';

dotenv.config();

connectDb();

const importData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);

		const admineUser = createdUsers[0]._id;

		const sampleProduct = products.map((product) => {
			return { ...product, user: admineUser };
		});

		await Product.insertMany(sampleProduct);
		console.log('DAta Imported'.green.inverse);
		process.exit();
	} catch (error) {
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

const destroydData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		console.log('DAta Destroyed'.red.inverse);
		process.exit();
	} catch (error) {
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroydData();
} else {
	importData();
}

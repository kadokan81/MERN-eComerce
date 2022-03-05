import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

//@desc Creare new order
//@ route POST /api/orders
//@access Public
const addOrderItems = asyncHandler(async (req, res) => {
	const {
		cartItems,
		itemsPrice,
		paymentMethod,
		shippingAddress,
		shippingPrice,
		taxPrice,
		totalPrice,
	} = req.body;
	if (!cartItems && cartItems.length === 0) {
		res.status(400);
		throw new Error('No order items');
		return;
	} else {
		const order = new Order({
			cartItems,
			user: req.user._id,
			itemsPrice,
			paymentMethod,
			shippingAddress,
			shippingPrice,
			taxPrice,
			totalPrice,
		});
		const createdOrder = await order.save();
		res.status(201).json(createdOrder);
	}
});

export { addOrderItems };

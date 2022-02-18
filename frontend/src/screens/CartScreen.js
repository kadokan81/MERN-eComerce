import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addToCartActions, removeFromCArt } from '../actions/cartAction';
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import Message from '../components/Message';

const CartScreen = () => {
	let { id, qty } = useParams();

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	useEffect(() => {
		if (id && qty) {
			dispatch(addToCartActions(id, Number(qty)));
		}
	}, [dispatch, id, qty]);

	const removeFromCartHAndler = (id) => {
		dispatch(removeFromCArt(id));
	};
	const checkoutHandler = () => {};
	return (
		<Row>
			<Col md={8}>
				<h1>Shopping Cart</h1>
				{cartItems.length === 0 ? (
					<Message>
						You cart is empty <Link to='/'>Go Back</Link>{' '}
					</Message>
				) : (
					<ListGroup variant='flush'>
						{cartItems.map((item) => (
							<ListGroup.Item key={item.product}>
								<Row>
									<Col md={2}>
										<Image src={item.image} alt={item.name} fluid rounded />
									</Col>
									<Col md={3}>
										<Link to={`/product/${item.product}`}>{item.name}</Link>
									</Col>
									<Col md={2}>${item.price}</Col>
									<Col md={2}>
										<Form.Control
											as='select'
											value={item.qty}
											onChange={(e) =>
												dispatch(
													addToCartActions(item.product, Number(e.target.value))
												)
											}>
											{[...Array(item.countInStock).keys()].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</Form.Control>
									</Col>
									<Col md={2}>
										<Button
											type='button'
											variant='light'
											onClick={() => removeFromCartHAndler(item.product)}>
											<i className='fas fa-trash'></i>
										</Button>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Col>
			<Col md={4}>
				<ListGroup>
					<ListGroup.Item>
						<h3>
							Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
							items
						</h3>
						$
						{cartItems
							.reduce((acc, item) => acc + item.qty * item.price, 0)
							.toFixed(2)}
					</ListGroup.Item>
					<ListGroup.Item>
						<Button
							type='button'
							className='btn-block'
							disabled={cartItems.length === 0}
							onClick={checkoutHandler}>
							Proceed to Checkout
						</Button>
					</ListGroup.Item>
				</ListGroup>
			</Col>
			<Col md={2}></Col>
		</Row>
	);
};

export default CartScreen;

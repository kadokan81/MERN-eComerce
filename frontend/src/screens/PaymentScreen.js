import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../actions/cartAction';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';

const PaymentScreen = () => {
	let navigate = useNavigate();
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	if (!shippingAddress.address) {
		navigate('/shipping');
	}

	const [payment, setPaymentMethod] = useState('PayPal');

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(savePaymentMethod(payment));
		navigate('/placeorder');
	};

	return (
		<FormContainer>
			<CheckoutSteps step1 step2 step3 />
			<h1>Payment Method</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='paymrntMethod'>
					<Form.Label>Select Method</Form.Label>
				</Form.Group>
				<Col>
					<Form.Check
						type='radio'
						label='PayPal or Credit Card'
						id='PyPal'
						name='paymentMethod'
						value='PayPAl'
						checked
						onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
					<Form.Check
						type='radio'
						label='Stripe'
						id='Stripe'
						name='paymentMethod'
						value='spripe'
						onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
				</Col>
				<Button type='submit' variant='primary' style={{ marginTop: '20px' }}>
					Submit
				</Button>
			</Form>
		</FormContainer>
	);
};

export default PaymentScreen;

import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
	return (
		<Nav className='justify-content-center mb-4'>
			<Nav.Item>
				{step1 ? (
					<LinkContainer to='/login'>
						<Nav.Link eventKey='link-1'>Sign In</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link eventKey='link-1' disabled>
						Sign In
					</Nav.Link>
				)}
			</Nav.Item>
			<Nav.Item>
				{step2 ? (
					<LinkContainer to='/shipping'>
						<Nav.Link eventKey='link-1'>Shipping To</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link eventKey='link-1' disabled>
						Shipping To
					</Nav.Link>
				)}
			</Nav.Item>{' '}
			<Nav.Item>
				{step3 ? (
					<LinkContainer to='/payment'>
						<Nav.Link eventKey='link-1'>Payment</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link eventKey='link-1' disabled>
						Payment
					</Nav.Link>
				)}
			</Nav.Item>{' '}
			<Nav.Item>
				{step4 ? (
					<LinkContainer to='/placeorder'>
						<Nav.Link eventKey='link-1'>Place Order</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link eventKey='link-1' disabled>
						Place Order
					</Nav.Link>
				)}
			</Nav.Item>
		</Nav>
	);
};

export default CheckoutSteps;

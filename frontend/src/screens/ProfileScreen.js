import React, { useEffect, useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserDetails, login } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProfileScreen = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	let navigate = useNavigate();
	const dispatch = useDispatch();

	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		if (!userInfo) {
			navigate('/login');
		} else {
			if (!user.name) {
				dispatch(getUserDetails('profile'));
			} else {
				setName(user.name);
				setEmail(user.email);
			}
		}
	}, [userInfo, navigate, dispatch, user]);

	const submitHandler = (e) => {
		e.preventDefault();
		// DISPARCH UPDATE PROFILEW
		// dispatch(login(email, password));
	};
	return (
		<Row>
			<Col md={9}>
				<FormContainer>
					<h2> User Profile</h2>
					{message && <Message variant='danger'>{message}</Message>}
					{error && <Message variant='danger'>{error}</Message>}
					{loading && <Loader />}
					<Form onSubmit={submitHandler}>
						<Form.Group controlId='name'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='name'
								placeholder='Enter name'
								value={name}
								onChange={(e) => setName(e.target.value)}></Form.Control>
						</Form.Group>
						<Form.Group controlId='email'>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}></Form.Control>
						</Form.Group>
						<Form.Group controlId='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Enter Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}></Form.Control>
						</Form.Group>
						<Form.Group controlId='confirmpassword'>
							<Form.Label>Repeat Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Repeat Password'
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}></Form.Control>
						</Form.Group>
						<Button
							type='submit'
							variant='primary'
							style={{ marginTop: '20px' }}>
							Update
						</Button>
					</Form>
				</FormContainer>
			</Col>
			<Col md={6}>
				<h2>My Odrers</h2>
			</Col>
		</Row>
	);
};

export default ProfileScreen;

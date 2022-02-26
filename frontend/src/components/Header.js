import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';

const Header = () => {
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Link to='/' className='navbar-brand'>
						ProShop
					</Link>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto' style={{ marginLeft: 'auto' }}>
							<Link className='nav-link' to='/cart'>
								<i className='fas fa-shopping-cart'></i>Card
							</Link>

							{userInfo ? (
								<NavDropdown title={userInfo.name} id='username'>
									<Link className='dropdown-item' to='/profile'>
										Profile
									</Link>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<Link className='nav-link' to='/login'>
									<i className='fas fa-user'></i>Sign In
								</Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;

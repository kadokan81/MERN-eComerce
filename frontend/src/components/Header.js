import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
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

							<Link className='nav-link' to='/login'>
								<i className='fas fa-user'></i>Sign In
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;

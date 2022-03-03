import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScrean from './screens/LoginScrean';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<main className='py-3'>
				<Container>
					<Routes>
						<Route path='/' element={<HomeScreen />} exact />
						<Route path='/payment' element={<PaymentScreen />} />
						<Route path='/login' element={<LoginScrean />} />
						<Route path='/register' element={<RegisterScreen />} />
						<Route path='/profile' element={<ProfileScreen />} />
						<Route path='/product/:id' element={<ProductScreen />} />
						<Route path='/cart/:id/:qty' element={<CartScreen />} />
						<Route path='/cart' element={<CartScreen />} />
						<Route path='/shipping' element={<ShippingScreen />} />
						<Route path='*' element={<HomeScreen />} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;

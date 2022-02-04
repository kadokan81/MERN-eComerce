import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

const App = () => {
	return (
		<>
			<Header />
			<main className='py-3'>
				<Container>
					<h1>Hello from e comers form git</h1>
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default App;

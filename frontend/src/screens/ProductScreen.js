import React, { useEffect, useState } from 'react';
import {
	Button,
	Card,
	Col,
	Form,
	Image,
	ListGroup,
	Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { listProductDetails } from '../actions/productAction';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Raiting from '../components/Rating';

const ProductScreen = () => {
	let navigate = useNavigate();
	const [qty, setQty] = useState(1);
	let { id } = useParams();
	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { product, loading, error } = productDetails;

	useEffect(() => {
		dispatch(listProductDetails(id));
	}, [dispatch, id]);
	const addToCartHandler = () => {
		navigate(`/cart/${id}/${qty}`);
	};

	return (
		<>
			<Link to='/' className='btn btn-light my3'>
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<Image src={product.image} alt={product.name} fluid />
					</Col>
					<Col md={3}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{product.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Raiting
									value={product.rating}
									text={`${product.numReviews} reviews`}
								/>
							</ListGroup.Item>
							<ListGroup.Item>
								<h3>Price: ${product.price}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								Description: {product.description}
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<Card>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Row>
										<Col>Status:</Col>
										<Col>
											{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Price:</Col>
										<Col>{product.price}</Col>
									</Row>
								</ListGroup.Item>
								{product.countInStock > 0 && (
									<ListGroup.Item>
										<Row>
											<Col>Qty</Col>
											<Col>
												<Form.Control
													as='select'
													value={qty}
													onChange={(e) => setQty(e.target.value)}>
													{[...Array(product.countInStock).keys()].map((x) => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													))}
												</Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}

								<ListGroup.Item>
									<div className='d-grid gap-2'>
										<Button
											onClick={addToCartHandler}
											variant='primary'
											disabled={product.countInStock === 0}>
											Add To Card
										</Button>
									</div>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	);
};

export default ProductScreen;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Raiting from '../components/Rating';

const ProductScreen = () => {
	const [product, setProduct] = useState({});
	let { id } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/products/${id}`);
			setProduct(data);
		};
		fetchProduct();
	}, [id]);

	return (
		<>
			<Link to='/' className='btn btn-light my3'>
				Go Back
			</Link>
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
						<ListGroup.Item>Description: {product.description}</ListGroup.Item>
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
							<ListGroup.Item>
								<div className='d-grid gap-2'>
									<Button
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
		</>
	);
};

export default ProductScreen;

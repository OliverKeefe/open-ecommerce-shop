import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import Rating from '../components/Rating';


function ProductScreen() {
  const { id } = useParams();
  const [product, setProduct] = useState([])
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/product/${id}`);
      setProduct(data)
    }
    
    fetchProduct()
  }, [])
  const imageUrl = `http://localhost:8000/${product.image}`;
  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>{"<"} Back</Link>
      <Row>
        <Col md={6}>
          <Image src={imageUrl} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>

          <ListGroup.Item>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
          </ListGroup.Item>
        
        <ListGroup.Item>
          Price: £{product.price}
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
                  <Col>Price:</Col>
                  <Col>
                    <strong>£{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
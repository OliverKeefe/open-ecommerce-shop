import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    const imageUrl = `http://localhost:8000/${product.image}`;

  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
            <Card.Img src={imageUrl} />
        </Link>
        <Card.Body>
            <Link to="`/product/${product._id}`">
                <Card.Title>
                    <div className="py-2">
                        <strong as="div" className="card-strong">
                            {product.name}
                        </strong>
                    </div>
                </Card.Title>
            </Link>
            <Card.Text as="div">
                <div className="my-3">
                    {product.rating} from {product.numReviews} reviews
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                </div>
            </Card.Text>
            <Card.Text as="h3">
                £{product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
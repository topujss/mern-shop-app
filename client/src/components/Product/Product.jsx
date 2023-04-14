import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.scss';
import ViewModal from '../ViewModal/ViewModal';
import { Link } from 'react-router-dom';

const Product = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="product_item">
      <ViewModal show={modal} onHide={() => setModal(false)} />
      <Card className="overflow-hidden">
        <Link to="/slugs">
          <Card.Img
            src="https://media.cnn.com/api/v1/images/stellar/prod/210804125008-razer-blade-15-lead.jpg?q=w_4032,h_2268,x_0,y_0,c_fill"
            alt="Title"
          />
        </Link>
        <Card.Body>
          <Card.Title>Hp blade 345</Card.Title>
          <div className="price d-flex gap-2 fs-4">
            <span className="fw-semibold sale text-decoration-line-through text-muted">$89</span>
            <span className="reg fw-light">$944</span>
          </div>
          <div className="product_btn mt-2 text-center">
            <Button variant="success" className="me-2 cart_btn">
              Add to cart
            </Button>
            <Button variant="info" onClick={() => setModal(true)}>
              View
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;

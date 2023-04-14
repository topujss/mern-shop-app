import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ViewModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Single product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="quick_view">
          <img
            style={{ maxWidth: '29rem' }}
            className="card-img"
            src="https://media.cnn.com/api/v1/images/stellar/prod/210804125008-razer-blade-15-lead.jpg?q=w_4032,h_2268,x_0,y_0,c_fill"
            alt=""
          />
          <div className="details my-3">
            <h4>Hp blade 345</h4>
            <div className="price d-flex gap-2 fs-4 mb-3 border-top border-2 border-primary">
              <span className="fw-semibold sale text-decoration-line-through text-muted">$89</span>
              <span className="reg fw-light">$944</span>
            </div>
          </div>
        </div>
        <div className="product_btn">
          <Button variant="success" className="me-2 cart_btn">
            Add to cart
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ViewModal;

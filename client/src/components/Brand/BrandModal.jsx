import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createBrand } from '../../redux/shop/actions';

const BrandModal = ({ show, onHide }) => {
  const [input, setInput] = useState('');
  const [logo, setLogo] = useState(null);

  // logo upload
  const handleFileUpload = (e) => {
    setLogo(e.target.files[0]);
  };

    const dispatch = useDispatch();


  // create brand form data
  const handleCreateBrand = async (e) => {
    e.preventDefault();

    // initialize a new form data object with the brand name and logo
    const form_data = new FormData();
    form_data.append('name', input);
    form_data.append('brand_photo', logo);

    // call axios to test the data
    dispatch(createBrand(form_data));
  };

  return (
    <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add a new brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleCreateBrand}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Brand name</Form.Label>
            <Form.Control type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Brand logo</Form.Label>
            <Form.Control type="file" onChange={handleFileUpload} className="" />
            {logo && (
              <img className="w-100 object-fit-cover rounded p-2 pt-4" src={URL.createObjectURL(logo)} alt="" />
            )}
          </Form.Group>
          <Button variant="success" type="submit">
            Add Brand
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BrandModal;

import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createBrand } from '../../redux/shop/actions.js';

const BrandModal = ({ show, onHide, setModal }) => {
  const [input, setInput] = useState('');
  const [logo, setLogo] = useState(null);

  const dispatch = useDispatch();

  const handleLogoUpload = (e) => {
    setLogo(e.target.files[0]);
  };

  // check form data by connecting the api
  const handleFormData = async (e) => {
    e.preventDefault();

    // create a form data object
    const form_data = new FormData();

    // add each field to the form
    form_data.append('name', input);
    form_data.append('brand_photo', logo);

    // send data to the server using axios req
    dispatch(createBrand({ data: form_data, setModal, setInput, setLogo }));
  };
  return (
    <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Single product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormData}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Brand name"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Logo</Form.Label>
            <Form.Control type="file" onChange={handleLogoUpload} />
            {logo && <img className="w-100 p-2 pt-4" src={URL.createObjectURL(logo)} alt="" />}
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

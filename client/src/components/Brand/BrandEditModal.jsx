import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { brandUpdate } from '../../redux/shop/actions';

const BrandEditModal = ({ show, onHide, editId, setEditModal }) => {
  const [logo, setLogo] = useState(null);
  const [edit, setEdit] = useState({
    name: '',
    photo: '',
  });

  const dispatch = useDispatch();

  // get brands by use selector
  const { brands } = useSelector((s) => s.shop);

  // get editted data
  useEffect(() => {
    const edit_data = brands?.find((d) => d._id === editId);
    setEdit(edit_data);
  }, [editId, brands]);

  const handleModalHide = () => {
    onHide();
    setLogo(null);
  };

  const handleUpdateBrand = (e) => {
    e.preventDefault();

    // create form data for photo upload
    const form_data = new FormData();

    form_data.append('name', edit?.name);
    form_data.append('photo', edit?.photo);
    form_data.append('brand_photo', logo);

    // update brand redux way
    dispatch(brandUpdate({ data: form_data, id: editId, setEditModal }));
  };

  return (
    <Modal show={show} onHide={handleModalHide} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit the existing brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleUpdateBrand}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Brand name</Form.Label>
            <Form.Control
              type="text"
              value={edit?.name}
              onChange={(e) => setEdit((prevState) => ({ ...prevState, name: e.target.value }))}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Brand logo</Form.Label>
            <Form.Control type="file" className="" />
            {logo ? (
              <img className="w-100 object-fit-cover rounded p-2 pt-4" src={URL.createObjectURL(logo)} alt="" />
            ) : (
              edit?.photo && (
                <img
                  className="w-100 object-fit-cover rounded p-2 pt-4"
                  src={`http://localhost:5050/brands/${edit.photo}`}
                  alt=""
                />
              )
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

export default BrandEditModal;

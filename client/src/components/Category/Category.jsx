import GlobalModal from '../GlobalModal/GlobalModal';
import { Button, ButtonGroup, Form, Table } from 'react-bootstrap';
import { FiEdit3 } from 'react-icons/fi';
import { SlTrash } from 'react-icons/sl';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Category = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [pic, setPic] = useState(null);
  const [editModal, setEditModal] = useState({
    show: false,
    dataId: null,
  });

  const [edit, setEdit] = useState({
    name: '',
    logo: null,
  });

  const { categories } = useSelector((s) => s.shop);

  // to upload a file
  const handleFileUpload = (e) => {
    setPic(e.target.files[0]);
  };

  // to make status update
  const handleStatus = () => {};

  // to edit data
  const handleEdit = () => {};

  // to submit data after everything done
  const handleEditSubmit = () => {};

  // to delete data
  const handleDelete = () => {};

  return (
    <div className="table_area">
      <GlobalModal show={modal} onHide={() => setModal(false)} title={'Add New Category'}>
        <Form onSubmit={'handleCreateSubmit'}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Category picture</Form.Label>
            <Form.Control required type="file" onChange={handleFileUpload} />
            {pic && (
              <img className="w-100 object-fit-cover rounded p-2 pt-4" src={URL.createObjectURL(pic)} alt="" />
            )}
          </Form.Group>
          <Button variant="success" type="submit">
            Add Category
          </Button>
        </Form>
      </GlobalModal>
      <div className="table_header d-flex justify-content-between">
        <h3 className="fw-bold text-uppercase fs-4">Category list</h3>
        <Button variant="success" className="fw-semibold mb-3 text-capitalize" onClick={() => setModal(true)}>
          <AiOutlinePlus /> create new Category
        </Button>
      </div>
      <div className="table_list" id="myTable">
        <Table hover className="align-middle">
          <thead className="text-white" style={{ background: '#B12872' }}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Picture</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(({ name, photo, status, _id }, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>
                    <img style={{ width: '50px' }} src={`http://localhost:5050/categories/${photo}`} alt="" />
                  </td>
                  <td>
                    <Form.Switch type="switch" checked={status} onChange={() => handleStatus()} />
                  </td>
                  <td>
                    <ButtonGroup size="sm" onClick={() => handleEdit()}>
                      <Button className="btn-warning me-1">
                        <FiEdit3 />
                      </Button>
                      <Button className="btn-danger" onClick={() => handleDelete()}>
                        <SlTrash />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              );
            })}

            {/* // If there is no brand show this
            <tr>
              <td colSpan={5} className="text-center ">
                <span className="text-danger fw-semibold">Have you added brand?</span> Click the button to add.
              </td>
            </tr> */}
          </tbody>
        </Table>
      </div>
      <GlobalModal
        show={editModal.show}
        onHide={() => setEditModal({ show: false })}
        title={'Edit existing Category'}
      >
        <Form onSubmit={handleEditSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={edit.name}
              onChange={(e) => setEdit((prevState) => ({ ...prevState, name: e.target.value }))}
            />
          </Form.Group>
          <Button variant="success" type="submit" className="d-block">
            Add Category
          </Button>
        </Form>
      </GlobalModal>
    </div>
  );
};

export default Category;

import GlobalModal from '../GlobalModal/GlobalModal';
import { Button, ButtonGroup, Form, Table } from 'react-bootstrap';
import { FiEdit3 } from 'react-icons/fi';
import { SlTrash } from 'react-icons/sl';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryStatusUpdate, categoryUpdate, createCategory, deleteCategory } from '../../redux/shop/actions';
import swal from 'sweetalert';

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

  const dispatch = useDispatch();

  const { categories } = useSelector((s) => s.shop);

  // to upload a file
  const handleFileUpload = (e) => {
    setPic(e.target.files[0]);
  };

  // Create category data
  const handleCreateSubmit = (e) => {
    e.preventDefault();

    // create formData object for photo uploading
    const data = new FormData();

    // Now, add data to form data
    data.append('name', name);
    data.append('category_photo', pic);

    // Finally, add all data to create category
    dispatch(createCategory(data));

    // make data to its inital value once data created
    setPic(null);
    setName('');
    setModal(false); // hide the modal
  };

  // to make status update
  const handleStatus = (id, status) => {
    dispatch(categoryStatusUpdate({ id, status: !status }));
  };

  // to edit data
  const handleEdit = (id) => {
    // find that data by matching ID that you got
    const edit_data = categories.find((d) => d._id === id);

    // Now, set input data to useState
    setEdit(edit_data);

    // make edit modal visible
    setEditModal({
      show: true,
      dataId: id,
    });
  };

  // to submit data after everything done
  const handleEditSubmit = (e) => {
    e.preventDefault();

    // create form data for photo upload
    const data = new FormData();

    data.append('name', edit?.name);
    data.append('photo', edit?.photo);
    data.append('category_photo', pic);

    // update category redux way
    dispatch(categoryUpdate({ id: editModal.dataId, data, setEditModal }));

    // make data to its inital value once data created

    setModal(false); // hide the modal
  };

  // to delete data
  const handleDelete = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((del) => {
      if (del) {
        dispatch(deleteCategory(id));
        swal('Poof! Your imaginary file has been deleted!', {
          icon: 'success',
        });
      } else {
        swal('Your imaginary file is safe!');
      }
    });
  };

  const handleCategoryLogo = (e) => {
    setPic(e.target.files[0]);
  };

  return (
    <div className="table_area">
      <GlobalModal show={modal} onHide={() => setModal(false)} title={'Add New Category'}>
        <Form onSubmit={handleCreateSubmit}>
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
                    <Form.Switch type="switch" checked={status} onChange={() => handleStatus(_id, status)} />
                  </td>
                  <td>
                    <ButtonGroup size="sm">
                      <Button className="btn-warning me-1" onClick={() => handleEdit(_id)}>
                        <FiEdit3 />
                      </Button>
                      <Button className="btn-danger" onClick={() => handleDelete(_id)}>
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
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Category logo</Form.Label>
            <Form.Control type="file" className="" onChange={handleCategoryLogo} />
            {pic ? (
              <img className="w-100 object-fit-cover rounded p-2 pt-4" src={URL.createObjectURL(pic)} alt="" />
            ) : (
              <img
                className="w-100 object-fit-cover rounded p-2 pt-4"
                src={`http://localhost:5050/categories/${edit.photo}`}
                alt=""
              />
            )}
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

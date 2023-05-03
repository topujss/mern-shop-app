import { AiOutlinePlus } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';
import { SlTrash } from 'react-icons/sl';
import { Button, ButtonGroup, Form, Table } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { brandStatusUpdate, createBrand, deleteBrand } from '../../redux/shop/actions';
import swal from 'sweetalert';
import BrandEditModal from './BrandEditModal';
import GlobalModal from '../GlobalModal/GlobalModal';

const Brand = () => {
  const [input, setInput] = useState('');
  const [logo, setLogo] = useState(null);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState({
    show: false,
    editId: null,
  });
  const { brands } = useSelector((s) => s.shop);

  const dispatch = useDispatch();

  // logo upload
  const handleFileUpload = (e) => {
    setLogo(e.target.files[0]);
  };

  // create brand form data
  const handleCreateBrand = async (e) => {
    e.preventDefault();

    // initialize a new form data object with the brand name and logo
    const form_data = new FormData();
    form_data.append('name', input);
    form_data.append('brand_photo', logo);

    // call axios to test the data
    dispatch(createBrand({ data: form_data, setModal, setInput, setLogo }));
  };

  // status update handler
  const handleStatus = (id, status) => {
    dispatch(brandStatusUpdate({ id, status: !status }));
  };

  // edit handler
  const handleEdit = (id) => {
    setEditModal({ show: true, editId: id });
  };

  // to confirm before delete
  const handleDelete = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBrand(id));
        swal('Poof! Your imaginary file has been deleted!', {
          icon: 'success',
        });
      } else {
        swal('Your imaginary file is safe!');
      }
    });
  };

  return (
    <div className="table_area">
      <GlobalModal show={modal} onHide={() => setModal(false)} title={'Add New Brand'}>
        <Form onSubmit={handleCreateBrand}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Brand name</Form.Label>
            <Form.Control type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Brand logo</Form.Label>
            <Form.Control required type="file" onChange={handleFileUpload} className="" />
            {logo && (
              <img className="w-100 object-fit-cover rounded p-2 pt-4" src={URL.createObjectURL(logo)} alt="" />
            )}
          </Form.Group>
          <Button variant="success" type="submit">
            Add Brand
          </Button>
        </Form>
      </GlobalModal>
      <div className="table_header d-flex justify-content-between">
        <h3 className="fw-bold text-uppercase fs-4">Brands</h3>
        <Button variant="success" className="fw-semibold mb-3" onClick={() => setModal(true)}>
          <AiOutlinePlus /> Create New
        </Button>
      </div>
      <div className="table_list me-5" id="myTable">
        <Table hover className="align-middle">
          <thead className=" text-white" style={{ background: '#B12872' }}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Logo</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{brand.name}</td>
                  <td>
                    <img
                      className="img-thumbnail"
                      style={{ width: '50px' }}
                      src={`http://localhost:5050/brands/${brand.photo}`}
                      alt=""
                    />
                  </td>
                  <td>
                    <Form.Switch
                      type="switch"
                      checked={brand.status}
                      onChange={() => handleStatus(brand._id, brand.status)}
                    />
                  </td>
                  <td>
                    <ButtonGroup size="sm">
                      <Button className="btn-warning me-1" onClick={() => handleEdit(brand._id)}>
                        <FiEdit3 />
                      </Button>
                      <Button className="btn-danger" onClick={() => handleDelete(brand._id)}>
                        <SlTrash />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              );
            })}
            {/* // If there is no brand show this
            // <tr>
            //   <td colSpan={5} className="text-center ">
            //     <span className="text-danger fw-semibold">Have you added brand?</span> Click the button to add.
            //   </td>
            // </tr> */}
          </tbody>
        </Table>
      </div>
      <BrandEditModal
        setEditModal={setEditModal}
        show={editModal.show}
        editId={editModal.editId}
        onHide={() => setEditModal({ show: false })}
      />
    </div>
  );
};

export default Brand;

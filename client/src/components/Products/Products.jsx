import GlobalModal from '../GlobalModal/GlobalModal';
import { Button, ButtonGroup, Form, Table } from 'react-bootstrap';
import { FiEdit3 } from 'react-icons/fi';
import { SlTrash } from 'react-icons/sl';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FidgetSpinner } from 'react-loader-spinner';

import swal from 'sweetalert';

const Products = () => {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState({
    name: '',
    price: '',
    sale_price: '',
    stock: '',
    condition: '',
    stock: '',
    desc: '',
    long_desc: '',
  });
  const [pic, setPic] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [editModal, setEditModal] = useState({
    show: false,
    dataId: null,
  });
  const [edit, setEdit] = useState({
    name: '',
    logo: null,
  });

  const dispatch = useDispatch();
  const { products, categories, tags, brands, loading } = useSelector((s) => s.shop);

  // to upload a single file
  const handlePicUpload = (e) => {
    setPic(e.target.files[0]);
  };

  // to upload multiple files
  const handleGalleryUpload = (e) => {
    let galleries = Array.from(e.target.files);

    setGallery(...galleries);
  };

  // Create Products data
  const handleCreateSubmit = (e) => {
    e.preventDefault();
  };

  // to make status update
  const handleStatus = (id, status) => {};

  // to edit data
  const handleEdit = (id) => {
    // find that data by matching ID that you got
    const edit_data = products.find((d) => d._id === id);

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
  };

  // to delete data
  const handleDelete = (id) => {};

  const { name, price, sale_price, stock, condition, desc, long_desc } = input;
  return (
    <div className="table_area">
      <GlobalModal show={modal} onHide={() => setModal(false)} title={'Add New Products'} area={'lg'}>
        <Form onSubmit={handleCreateSubmit} className="d-flex gap-4">
          <div className="form_left flex-fill">
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label className="me">Products name</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setInput(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label className="me">Regular Price</Form.Label>
              <Form.Control min={1} type="number" value={price} onChange={(e) => setInput(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label className="me">Sale Price</Form.Label>
              <Form.Control min={1} type="number" value={sale_price} onChange={(e) => setInput(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label className="me">Short description</Form.Label>
              <Form.Control type="text" value={desc} onChange={(e) => setInput(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label className="me">Long description</Form.Label>
              <Form.Control type="text" value={long_desc} onChange={(e) => setInput(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="me">Featured photo</Form.Label>
              <Form.Control required type="file" onChange={handlePicUpload} />
              {pic && (
                <img className="w-100 object-fit-cover rounded p-2 pt-4" src={URL.createObjectURL(pic)} alt="" />
              )}
            </Form.Group>
            <div className="submit_button text-end">
              <Button variant="success" type="submit" className="w-100">
                Add Products
              </Button>
            </div>
          </div>
          <div className="form_right flex-fill">
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label className="me">Stock</Form.Label>
              <Form.Control type="number" min={1} value={stock} onChange={(e) => setInput(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label className="me">Condition</Form.Label>
              <select className="form-control">
                <option value="">-Select-</option>
                <option value="New">New</option>
                <option value="Refurbised">Refurbised</option>
                <option value="Clearance">Clearance</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="me">Products Category</Form.Label>
              {categories?.map(({ name, _id }, index) => {
                return (
                  <label className="d-block" key={index}>
                    <input type="checkbox" value={_id} /> {name}
                  </label>
                );
              })}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="me">Product Tags</Form.Label>
              {tags?.map(({ name, _id }, index) => {
                return (
                  <label className="d-block" key={index}>
                    <input type="checkbox" value={_id} /> {name}
                  </label>
                );
              })}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="me">Product Brands</Form.Label>
              <select className="form-control">
                <option value="">-Select-</option>
                {brands?.map(({ name, _id }, index) => {
                  return <option value={_id}>{name}</option>;
                })}
              </select>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="me">Products Gallery</Form.Label>
              <Form.Control required type="file" onChange={handleGalleryUpload} />
              {pic && (
                <img className="w-100 object-fit-cover rounded p-2 pt-4" src={URL.createObjectURL(pic)} alt="" />
              )}
            </Form.Group>
          </div>
        </Form>
      </GlobalModal>
      <div className="table_header d-flex justify-content-between">
        <h3 className="fw-bold text-uppercase fs-4">Products list</h3>
        <Button variant="success" className="fw-semibold mb-3 text-capitalize" onClick={() => setModal(true)}>
          <AiOutlinePlus /> create new Products
        </Button>
      </div>
      <div className="table_list" id="myTable">
        <Table hover className="align-middle">
          <thead className="text-white" style={{ background: '#B12872' }}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Condition</th>
              <th>Picture</th>
              <th>Category</th>
              <th>Tag</th>
              <th>Brand</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {loading && (
            <FidgetSpinner
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              ballColors={['#ff0000', '#00ff00', '#0000ff']}
              backgroundColor="#F4442E"
            />
          )}
          <tbody>
            {products?.map(({ name, price, sale_price, stock, condition, photo, status, _id }, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>
                    {sale_price ? (
                      <>
                        {' '}
                        <del>{price}</del>
                        <strong className="ms-1"> {sale_price}</strong>
                      </>
                    ) : (
                      <span>{sale_price}</span>
                    )}
                  </td>
                  <td>{stock}</td>
                  <td>{condition}</td>
                  <td>
                    <img style={{ width: '50px' }} src={`http://localhost:5050/categories/${photo}`} alt="" />
                  </td>
                  <td>{name}</td>
                  <td>{name}</td>
                  <td>{name}</td>
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
        title={'Edit existing Products'}
      >
        <Form onSubmit={handleEditSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Products name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={edit.name}
              onChange={(e) => setEdit((prevState) => ({ ...prevState, name: e.target.value }))}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Products logo</Form.Label>
            <Form.Control type="file" className="" />
            {pic ? (
              <img className="w-100 object-fit-cover rounded p-2 pt-4" src={URL.createObjectURL(pic)} alt="" />
            ) : (
              edit.photo && (
                <img
                  className="w-100 object-fit-cover rounded p-2 pt-4"
                  src={`http://localhost:5050/categories/${edit.photo}`}
                  alt=""
                />
              )
            )}
          </Form.Group>
          <Button variant="success" type="submit" className="d-block">
            Add Products
          </Button>
        </Form>
      </GlobalModal>
    </div>
  );
};

export default Products;

// icons
import { AiOutlinePlus } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';
import { SlTrash } from 'react-icons/sl';

// bootstrap
import { Button, ButtonGroup, Form, Table } from 'react-bootstrap';

// page
import BrandModal from './BrandModal';

// react
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Brand = () => {
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState(false);

  const { brands, loading } = useSelector((state) => state.shop);

  return (
    <div className="table_area">
      <BrandModal setModal={setModal} show={modal} onHide={() => setModal(false)} />
      <div className="table_header d-flex justify-content-between">
        <h3 className="fw-bold text-uppercase fs-4">Brands</h3>
        <Button variant="success" className="fw-semibold mb-3" onClick={() => setModal(true)}>
          <AiOutlinePlus /> Create New
        </Button>
      </div>
      <div className="table_list me-5" id="myTable">
        <Table striped hover className="align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Logo</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && 'Im loading...'}
            {brands ? (
              brands.map(({ name, slug, photo }, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>
                      <img style={{ width: '50px' }} src={`http://localhost:5050/brands/${photo}`} alt="" />
                    </td>
                    <td>
                      <Form.Switch
                        type="switch"
                        label={status ? 'Published' : 'Unpublished'}
                        checked={status}
                        onClick={() => setStatus(!status)}
                      />
                    </td>
                    <td>
                      <ButtonGroup size="sm">
                        <Button className="btn-warning">
                          <FiEdit3 />
                        </Button>
                        <Button className="btn-danger">
                          <SlTrash />
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5} className="text-center ">
                  <span className="text-danger fw-semibold">Have you added brand?</span> Click the button to add.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Brand;

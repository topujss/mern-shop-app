import { AiOutlinePlus } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';
import { SlTrash } from 'react-icons/sl';
import { Button, ButtonGroup, Form, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import BrandModal from './BrandModal';
import { deleteBrand } from '../../redux/shop/actions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Brand = () => {
  const [modal, setModal] = useState(false);

  const { brands, loading } = useSelector((s) => s.shop);

  return (
    <div className="table_area">
      <BrandModal show={modal} onHide={() => setModal(false)} />
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
                    <Form.Switch type="switch" defaultChecked={true} />
                  </td>
                  <td>
                    <ButtonGroup size="sm">
                      <Button className="btn-warning me-1">
                        <FiEdit3 />
                      </Button>
                      <Button className="btn-danger">
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
    </div>
  );
};

export default Brand;

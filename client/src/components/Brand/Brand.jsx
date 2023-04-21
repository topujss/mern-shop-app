import { AiOutlinePlus } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';
import { SlTrash } from 'react-icons/sl';
import { Button, ButtonGroup, Form, Table } from 'react-bootstrap';
import BrandModal from './BrandModal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { brandStatusUpdate, deleteBrand } from '../../redux/shop/actions';
import swal from 'sweetalert';

const Brand = () => {
  const [modal, setModal] = useState(false);
  const { brands, loading } = useSelector((s) => s.shop);

  const dispatch = useDispatch();

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

  // status update handler
  const handleStatus = (id, status) => {
    dispatch(brandStatusUpdate({ id, status: !status }));
  };

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
                      <Button className="btn-warning me-1">
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
    </div>
  );
};

export default Brand;

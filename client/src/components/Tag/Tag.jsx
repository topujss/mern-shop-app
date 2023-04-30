import { Button, ButtonGroup, Form, Table } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';
import { SlTrash } from 'react-icons/sl';
import GlobalModal from '../GlobalModal/GlobalModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTag, deleteTag, tagStatusUpdate, tagUpdate } from '../../redux/shop/actions';
import swal from 'sweetalert';

const Tag = () => {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState({
    showEdit: false,
    dataId: null,
  });
  const [input, setInput] = useState('');
  const [editInput, setEditInput] = useState('');
  const dispatch = useDispatch();

  const { tags } = useSelector((s) => s.shop);

  const handleStatus = (id, status) => {
    dispatch(tagStatusUpdate({ id, status: !status }));
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();

    // call axios to test the data
    dispatch(createTag(input));
  };

  const handleEdit = (id) => {
    // find that data by matching ID that you got
    const edit_data = tags?.find((d) => d._id === id);

    // Now, set input data to useState
    setEditInput(edit_data);

    // make edit modal visible
    setEditModal({
      showEdit: true,
      dataId: id,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    // return updated input to database
    dispatch(
      tagUpdate({
        data: editInput,
        setEditModal,
        id: editModal.dataId,
      })
    );
  };

  const handleDelete = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((del) => {
      if (del) {
        dispatch(deleteTag(id));
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
      <GlobalModal show={modal} onHide={() => setModal(false)} title={'Add New Tag'}>
        <Form onSubmit={handleCreateSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tag name</Form.Label>
            <Form.Control type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          </Form.Group>
          <Button variant="success" type="submit">
            Add tag
          </Button>
        </Form>
      </GlobalModal>
      <div className="table_header d-flex justify-content-between">
        <h3 className="fw-bold text-uppercase fs-4">tag list</h3>
        <Button variant="success" className="fw-semibold mb-3 text-capitalize" onClick={() => setModal(true)}>
          <AiOutlinePlus /> create new tag
        </Button>
      </div>
      <div className="table_list me-5" id="myTable">
        <Table hover className="align-middle">
          <thead className="text-white" style={{ background: '#B12872' }}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Slug</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tags.map(({ name, slug, status, _id }, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{slug}</td>
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
            {/* google 
            facebook
             */}
          </tbody>
        </Table>
      </div>
      <GlobalModal
        show={editModal.showEdit}
        onHide={() => setEditModal({ showEdit: false, dataId: null })}
        title={'Edit existing Tag'}
      >
        <Form onSubmit={handleEditSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tag name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={editInput.name}
              onChange={(e) => setEditInput((prevState) => ({ ...prevState, name: e.target.value }))}
            />
          </Form.Group>
          <Button variant="success" type="submit" className="d-block">
            Add tag
          </Button>
        </Form>
      </GlobalModal>
    </div>
  );
};

export default Tag;

import { Modal } from 'react-bootstrap';

const GlobalModal = ({ children, ...props }) => {
  const { show, onHide, title } = props;
  return (
    <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default GlobalModal;

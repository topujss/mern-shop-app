import { Modal } from 'react-bootstrap';

const GlobalModal = ({ children, ...props }) => {
  const { show, onHide, title, area } = props;
  return (
    <Modal show={show} size={area} onHide={onHide} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default GlobalModal;

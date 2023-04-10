import { useState } from 'react';
import { Button, Card, Col, Container, Modal, Offcanvas, Row } from 'react-bootstrap';

const Bootstrap = () => {
  const [canvas, setCanvas] = useState(true);
  const [modal, setModal] = useState(false);
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Header>Qute</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. </p>
                <footer className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <Card>
            <Card.Header>
              <h4>Offcanvas work</h4>
            </Card.Header>
            <Card.Body>
              <Button variant="primary" onClick={() => setCanvas(true)} className="me-2">
                Side menu
              </Button>
              <Offcanvas show={canvas} onHide={() => setCanvas(false)} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                  images, lists, etc.
                </Offcanvas.Body>
              </Offcanvas>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
              <Button onClick={() => setModal(true)}>Modal</Button>
              <Modal centered show={modal} onHide={() => setModal(false)}>
                <Modal.Header closeButton>Im header</Modal.Header>
                <Modal.Body>Im body</Modal.Body>
                <Modal.Footer>Im footer</Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Bootstrap;

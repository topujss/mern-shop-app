import { Col, Container, Row } from 'react-bootstrap';

const Admin = () => {
  return (
    <section className="admin_area">
      <Container>
        <Row>
          <Col md="2">menu</Col>
          <Col md="10">data</Col>
        </Row>
      </Container>
    </section>
  );
};

export default Admin;

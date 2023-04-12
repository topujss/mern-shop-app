import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className="p-0 text-center text-capitalize">
              All rights reserved by Ahmed in {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;

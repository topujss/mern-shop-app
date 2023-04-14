import { Container, Row, Col } from 'react-bootstrap';
import Product from '../../components/Product/Product';
import Sidbar from '../../components/Sidbar/Sidbar';

export default function Shop() {
  return (
    <section className="shop_page my-3">
      <Container>
        <Row>
          <Col md="3">
            <Sidbar />
          </Col>
          <Col md="9">
            <div className="product_wrap d-flex flex-wrap justify-content-space-between gap-3">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// template design

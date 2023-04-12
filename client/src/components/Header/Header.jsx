import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import Footer from '../Footer/Footer';

export default function Header() {
  return (
    <>
      <div className="top-header">
        <Container>
          <Row>
            <Col className="text-center">
              <Link to="/">
                <img
                  src="https://www.logodesign.net/logo/grocery-shopping-cart-with-stars-5858ld.png"
                  style={{ maxWidth: '12rem', height: 'auto', Objectfit: 'cover' }}
                  alt=""
                />
              </Link>
            </Col>
          </Row>
          <Row>
            <Nav as="ul">
              <Nav.Item as="li" gap={3}>
                <NavLink to="/">Shop</NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/cart" eventkey="1">
                  Cart
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link as="a" to="/wish" eventKey="2">
                  Wish
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/admin" eventKey="3">
                  Admin
                </Link>
              </Nav.Item>
            </Nav>
          </Row>
        </Container>
      </div>
      <Footer/>
    </>
  );
}

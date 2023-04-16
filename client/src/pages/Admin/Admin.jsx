import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <section className="admin_area mt-3">
      <Container>
        <Row>
          <Col md="2" className="p-0">
            <div className="admin_menu">
              <ul className="p-0">
                <li>
                  <Link className="bg-light fw-normal px-4 py-2 d-block text-info mb-1 text-center" to="/admin">
                    Dashboard
                  </Link>
                  <Link
                    className="bg-light fw-normal px-4 py-2 text-center d-block text-info mb-1 text-capitalize"
                    to="products"
                  >
                    products
                  </Link>
                  <Link
                    className="bg-light fw-normal px-4 py-2 text-center d-block text-info mb-1 text-capitalize"
                    to="category"
                  >
                    categories
                  </Link>
                  <Link
                    className="bg-light fw-normal px-4 py-2 text-center d-block text-info mb-1 text-capitalize"
                    to="tag"
                  >
                    tags
                  </Link>
                  <Link
                    className="bg-light fw-normal px-4 py-2 text-center d-block text-info mb-1 text-capitalize"
                    to="brand"
                  >
                    brands
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="10">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Admin;

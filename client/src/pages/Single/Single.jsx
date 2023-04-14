import { Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { BsSuitHeart } from 'react-icons/bs';
import './Single.scss';
import Product from '../../components/Product/Product';

const Single = () => {
  return (
    <section className="single_area pt-3">
      <Container>
        <Row>
          <Col md="7">
            <div className="single_photo pe-5">
              <img
                className="w-100"
                src="https://images.samsung.com/is/image/samsung/assets/us/galaxybooks/gb3-series/5316/NV06-GB3-PCD-FloatingNav-GB3Ultra-M.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col md="5">
            <div className="single_info">
              <h1>Samsung intel core i9</h1>

              <div className="price d-flex gap-2 border-top border-bottom align-items-end">
                <span className="sale text-decoration-line-through text-muted fs-4">$89</span>
                <span className="reg fw-semibold fs-2">$944</span>
              </div>
              <div className="desc w-75 py-3">
                <p className="text-secondary fs-6 fw-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quibusdam perspiciatis ab ad,
                  soluta ipsam sit doloremque natus rerum, quae ea animi ut maiores itaque tenetur non voluptates
                  alias aliquam.
                </p>
              </div>
              <div className="stock">
                <p className="text-success fs-6 fw-semibold">28 left</p>
              </div>
              <div className="single_btn mt-2 d-flex gap-2 ">
                <input min={0} type="number" />
                <Button variant="success" className="me-2 cart_btn">
                  Add to cart
                </Button>
                <Button variant="info">
                  <BsSuitHeart />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <div className="tab_area">
              <Tabs defaultActiveKey="1" className="mb-3">
                <Tab eventKey="1" title="Details">
                  <p className="ps-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>
                  <ul>
                    <li>also the leap into electronic typesetting, remaining essentially unchanged.</li>
                    <li>also the leap into electronic typesetting, remaining essentially unchanged.</li>
                    <li>also the leap into electronic typesetting, remaining essentially unchanged.</li>
                    <li>also the leap into electronic typesetting, remaining essentially unchanged.</li>
                  </ul>
                </Tab>
                <Tab eventKey="2" title="More Information">
                  details
                </Tab>
                <Tab eventKey="3" title="Reviews">
                  details
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
        <Row className="my-3">
          <Col md="12">
            <div className="related_area">
              <div className="relate_text text-center mb-2">
                <h2 className="fw-semibold">Related Products</h2>
                <p className="fw-normal text-muted">Browse the list of related products</p>
              </div>
              <div className="related_single d-flex gap-5 justify-content-space-between">
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Single;

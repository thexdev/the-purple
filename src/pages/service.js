import React, { lazy, memo } from 'react';
import Icon from 'components/icon';
import SectionWithNoHeader from 'components/section/with-no-header';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import gem from 'assets/images/icon/gem.svg';
import cookie from 'assets/images/icon/cookie.svg';
import thunder from 'assets/images/icon/thunder.svg';
import cart from 'assets/images/icon/cart.svg';
import website from 'assets/images/icon/website.svg';
import wrench from 'assets/images/icon/wrench.svg';
import equaliser from 'assets/images/icon/equaliser.svg';

const LayoutWithHeader = lazy(() =>
  import('components/layout/layout-with-header')
);

const Service = () => {
  return (
    <LayoutWithHeader title="Service" subtitle="">
      <SectionWithNoHeader>
        <Container>
          <Row>
            <Col xs={12} md={4} className="mb-5">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <Icon name={gem} alt="gem" className="d-block mx-auto" />
                  <h4 className="text-center text-uppercase mt-3 mb-4">
                    slicing mockup
                  </h4>
                  <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia iure excepturi fugiat, rerum voluptates recusandae
                    cupiditate quos praesentium quis molestiae velit
                    reprehenderit rem porro laudantium maxime omnis doloremque
                    ad enim.
                  </p>
                  <Button variant="warning" className="rounded-pill px-3 mt-3">
                    <span className="fas fa-arrow-right mr-2"></span>
                    <strong>I want it!</strong>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-5">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <Icon
                    name={cookie}
                    alt="cookie"
                    className="d-block mx-auto"
                  />
                  <h4 className="text-center text-uppercase mt-3 mb-4">
                    redesign web
                  </h4>
                  <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia iure excepturi fugiat, rerum voluptates recusandae
                    cupiditate quos praesentium quis molestiae velit
                    reprehenderit rem porro laudantium maxime omnis doloremque
                    ad enim.
                  </p>
                  <Button variant="warning" className="rounded-pill px-3 mt-3">
                    <span className="fas fa-arrow-right mr-2"></span>
                    <strong>I want it!</strong>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-5">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <Icon
                    name={thunder}
                    alt="thunder"
                    className="d-block mx-auto"
                  />
                  <h4 className="text-center text-uppercase mt-3 mb-4">
                    rest api
                  </h4>
                  <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia iure excepturi fugiat, rerum voluptates recusandae
                    cupiditate quos praesentium quis molestiae velit
                    reprehenderit rem porro laudantium maxime omnis doloremque
                    ad enim.
                  </p>
                  <Button variant="warning" className="rounded-pill px-3 mt-3">
                    <span className="fas fa-arrow-right mr-2"></span>
                    <strong>I want it!</strong>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-5">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <Icon name={cart} alt="cart" className="d-block mx-auto" />
                  <h4 className="text-center text-uppercase mt-3 mb-4">
                    e-commers
                  </h4>
                  <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia iure excepturi fugiat, rerum voluptates recusandae
                    cupiditate quos praesentium quis molestiae velit
                    reprehenderit rem porro laudantium maxime omnis doloremque
                    ad enim.
                  </p>
                  <Button variant="warning" className="rounded-pill px-3 mt-3">
                    <span className="fas fa-arrow-right mr-2"></span>
                    <strong>I want it!</strong>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-5">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <Icon
                    name={website}
                    alt="website"
                    className="d-block mx-auto"
                  />
                  <h4 className="text-center text-uppercase mt-3 mb-4">blog</h4>
                  <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia iure excepturi fugiat, rerum voluptates recusandae
                    cupiditate quos praesentium quis molestiae velit
                    reprehenderit rem porro laudantium maxime omnis doloremque
                    ad enim.
                  </p>
                  <Button variant="warning" className="rounded-pill px-3 mt-3">
                    <span className="fas fa-arrow-right mr-2"></span>
                    <strong>I want it!</strong>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-5">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <Icon
                    name={equaliser}
                    alt="equaliser"
                    className="d-block mx-auto"
                  />
                  <h4 className="text-center text-uppercase mt-3 mb-4">
                    setup cloud
                  </h4>
                  <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia iure excepturi fugiat, rerum voluptates recusandae
                    cupiditate quos praesentium quis molestiae velit
                    reprehenderit rem porro laudantium maxime omnis doloremque
                    ad enim.
                  </p>
                  <Button variant="warning" className="rounded-pill px-3 mt-3">
                    <span className="fas fa-arrow-right mr-2"></span>
                    <strong>I want it!</strong>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-5">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <Icon
                    name={wrench}
                    alt="wrench"
                    className="d-block mx-auto"
                  />
                  <h4 className="text-center text-uppercase mt-3 mb-4">
                    Lorem ipsum
                  </h4>
                  <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia iure excepturi fugiat, rerum voluptates recusandae
                    cupiditate quos praesentium quis molestiae velit
                    reprehenderit rem porro laudantium maxime omnis doloremque
                    ad enim.
                  </p>
                  <Button variant="warning" className="rounded-pill px-3 mt-3">
                    <span className="fas fa-arrow-right mr-2"></span>
                    <strong>I want it!</strong>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </SectionWithNoHeader>
    </LayoutWithHeader>
  );
};

export default memo(Service);

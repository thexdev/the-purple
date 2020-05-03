import React, { memo } from 'react';
import Icon from 'components/icon';
import LayoutWithHeader from 'components/layout/layout-with-header';
import SectionWithNoHeader from 'components/section/with-no-header';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import gem from 'assets/images/icon/gem.svg';
import cookie from 'assets/images/icon/cookie.svg';
import thunder from 'assets/images/icon/thunder.svg';
import cart from 'assets/images/icon/cart.svg';
import website from 'assets/images/icon/website.svg';
import wrench from 'assets/images/icon/wrench.svg';
import equaliser from 'assets/images/icon/equaliser.svg';

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
                    Convert XD or Figma design into HTML, CSS and JavaScript
                    assets and build the website.
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
                    You website look so bored? Just replace the old UI with the
                    new and fresh look design.
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
                    Build a fast and consistent Restful API with token based,
                    barear or jwt authentication.
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
                    Build light and fast e-commers website with complete basic
                    features. You can ask for custom feature later.
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
                    Build SEO friendly (include AMP mode) blog with complete
                    basic features. You can also ask for custom feature later.
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
                    Prepare your cloud provider to be ready for use. The
                    supported cloud provider is netlify, vercel and heroku.
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
                    maintenace
                  </h4>
                  <p className="text-secondary">
                    Fix your website bugs. You can aslo ask for extend or add a
                    new feature of your website.
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

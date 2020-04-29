import React, { memo } from 'react';
import LayoutWithHeader from 'components/layout/layout-with-header';
import SectionWithNoHeader from 'components/section/with-no-header';
import { Card, Col, Container, Row } from 'react-bootstrap';

import photo1 from 'assets/images/photo/photo-1.jpg';

const style = {
  filter: 'grayscale(80%)',
};

const About = () => {
  return (
    <LayoutWithHeader title="About" subtitle="let's get to know me closer">
      <SectionWithNoHeader>
        <Container className="mb-5">
          <Row>
            <Col md={6}>
              <h2 className="mb-4">
                Hi, <span className="text-danger">M. Akbar Nugroho</span> is
                here!
              </h2>
              <p className="lead">
                I'm a web developer with JavaScript and Python stack, obsessed
                with clean and orgenized code.
              </p>
              <p className="lead">
                I love to create an open source project and publish it to
                everyone. Such write an article to help someone's problem.
              </p>
              <p className="lead">
                My biggest passion is JavaScript and all modern technology.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={photo1}
                alt="m. akbar nugroho"
                className="d-none d-md-block ml-auto rounded-lg"
                height="250"
                style={style}
              />
            </Col>
          </Row>
        </Container>
      </SectionWithNoHeader>
      <SectionWithNoHeader>
        <Container className="mb-5">
          <Row>
            <Col className="text-center">
              <a
                href="https://github.com/thexdev"
                className="btn btn-dark btn-lg rounded-pill px-4 mx-5 shadow-lg mt-3 mt-md-0"
              >
                <span className="fab fa-github fa-xl mr-2"></span>
                Github
              </a>
              <a
                href="https://dev.to/thexdev"
                className="btn btn-light btn-lg rounded-pill px-4 mx-5 shadow-lg mt-3 mt-md-0"
              >
                <span className="fab fa-dev fa-xl mr-2"></span>
                Dev.to
              </a>
              <a
                href="https://medium.com/@thexdev"
                className="btn btn-light btn-lg rounded-pill px-4 mx-5 shadow-lg mt-3 mt-md-0"
              >
                <span className="fab fa-medium fa-xl mr-2"></span>
                Medium
              </a>
            </Col>
          </Row>
        </Container>
      </SectionWithNoHeader>
      <SectionWithNoHeader>
        <Container className="mb-5">
          <Row>
            <Col md={12}>
              <h2 className="mb-5">
                How i <span className="text-danger">build</span> my project?
              </h2>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm">
                <Card.Header className="border-0">
                  <h3>
                    <strong className="text-purple mr-3 badge badge-warning badge-pill">
                      1
                      <sup>
                        <small>st</small>
                      </sup>
                    </strong>
                    Analyze
                  </h3>
                </Card.Header>
                <Card.Body className="text-secondary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos nesciunt eveniet accusamus dolorum fugit eaque
                    eligendi, quae laborum ipsam assumenda laudantium animi?
                    Magni necessitatibus voluptate fugiat beatae eos tenetur
                    veniam?
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm mt-3 mt-md-0">
                <Card.Header className="border-0">
                  <h3>
                    <strong className="text-purple mr-3 badge badge-warning badge-pill">
                      2
                      <sup>
                        <small>nd</small>
                      </sup>
                    </strong>
                  </h3>
                </Card.Header>
                <Card.Body className="text-secondary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos nesciunt eveniet accusamus dolorum fugit eaque
                    eligendi, quae laborum ipsam assumenda laudantium animi?
                    Magni necessitatibus voluptate fugiat beatae eos tenetur
                    veniam?
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm mt-3 mt-md-0">
                <Card.Header className="border-0">
                  <h3>
                    <strong className="text-purple mr-3 badge badge-warning badge-pill">
                      3
                      <sup>
                        <small>rd</small>
                      </sup>
                    </strong>
                  </h3>
                </Card.Header>
                <Card.Body className="text-secondary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos nesciunt eveniet accusamus dolorum fugit eaque
                    eligendi, quae laborum ipsam assumenda laudantium animi?
                    Magni necessitatibus voluptate fugiat beatae eos tenetur
                    veniam?
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </SectionWithNoHeader>
    </LayoutWithHeader>
  );
};

export default memo(About);

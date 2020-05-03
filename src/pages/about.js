import React, { memo, useState } from 'react';
import Box from 'components/box';
import LayoutWithHeader from 'components/layout/layout-with-header';
import SectionWithNoHeader from 'components/section/with-no-header';
import { Card, Col, Container, Row } from 'react-bootstrap';

import photo1 from 'assets/images/photo/photo-1.jpg';
import processor from 'assets/images/icon/processor.svg';

const style = {
  filter: 'grayscale(80%)',
};

const icon = { name: processor, alternative: 'processor' };

const About = () => {
  const [tools] = useState([
    { title: 'adonisjs', description: 'To create fast Restful API' },
    { title: 'reactjs', description: 'To create user interface' },
    { title: 'django', description: 'Handle large traffic web' },
    { title: 'Laravel', description: 'To create common website' },
  ]);

  return (
    <LayoutWithHeader title="About" subtitle="">
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
              <h2 className="mb-5 text-center">
                How I <span className="text-danger">handle</span> a project?
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
                    Define the problem, cut it into small parts, and make a
                    timeline for each part.
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
                    Code
                  </h3>
                </Card.Header>
                <Card.Body className="text-secondary">
                  <p>
                    Choose the suitable tools and technology then, write
                    effective and efficient code.
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
                    Deploy
                  </h3>
                </Card.Header>
                <Card.Body className="text-secondary">
                  <p>
                    Write the test and setup a pipeline. Push it to master
                    branch and enjoy the process.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </SectionWithNoHeader>
      <SectionWithNoHeader>
        <Container className="mb-5">
          <Row>
            <Col xs={12}>
              <h2 className="mb-5 text-center">
                What <span className="text-danger">tools</span> that I usually
                use?
              </h2>
            </Col>
            {tools.map((tool, index) => (
              <Col xs={12} md={3} key={index}>
                <Box icon={icon} content={tool} />
              </Col>
            ))}
          </Row>
        </Container>
      </SectionWithNoHeader>
      <SectionWithNoHeader>
        <Container className="mb-5">
          <Row>
            <Col xs={12}>
              <h2 className="mb-5 text-center">
                Where I <span className="text-danger">host</span> the project?
              </h2>
            </Col>
          </Row>
        </Container>
      </SectionWithNoHeader>
    </LayoutWithHeader>
  );
};

export default memo(About);

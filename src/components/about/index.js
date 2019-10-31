import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  ProgressBar
} from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <section className="py-5 my-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="text-uppercase">about me</h2>
              <p className="lead text-secondary">freak and passionate person</p>
            </Col>
            <Col>
              <label>JavaScript</label>
              <ProgressBar className="rounded-pill" style={{ height: '6px' }} variant="warning" now={40} />
              <label>Python</label>
              <ProgressBar className="rounded-pill" style={{ height: '6px' }} variant="info" now={40} />
              <label>Ruby</label>
              <ProgressBar className="rounded-pill" style={{ height: '6px' }} variant="danger" now={40} />
              <label>Python</label>
              <ProgressBar className="rounded-pill" style={{ height: '6px' }} variant="info" now={40} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
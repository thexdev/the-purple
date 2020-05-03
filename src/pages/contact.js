import React, { memo } from 'react';
import LayoutWithHeader from 'components/layout/layout-with-header';
import SectionWithNoHeader from 'components/section/with-no-header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <LayoutWithHeader title="Contact" subtitle="">
      <SectionWithNoHeader>
        <Container>
          <Row>
            <Col>
              <p className="text-center">
                <strong className="d-block mb-4">
                  Ups! This page is under construction!
                </strong>
                <Link to="/" className="btn btn-danger rounded-pill">
                  Back to home
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </SectionWithNoHeader>
    </LayoutWithHeader>
  );
};

export default memo(Contact);

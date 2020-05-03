import React, { memo } from 'react';
import LayoutWithHeader from 'components/layout/layout-with-header';
import SectionWithNoHeader from 'components/section/with-no-header';
import { Container, Row, Col } from 'react-bootstrap';

import flittoken from 'assets/images/portfolio/flit-token.png';
import awmi from 'assets/images/portfolio/awmi.png';

const Portfolio = () => {
  return (
    <LayoutWithHeader title="Portfolio" subtitle="">
      <SectionWithNoHeader>
        <Container className="mb-5 pb-5">
          <Row>
            <Col xs={12} md={6}>
              <h2 className="text-danger">Flittoken</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates officiis, sed error accusantium impedit in cumque
                commodi. Maiores non eaque inventore doloribus perspiciatis
                quasi corporis esse veniam excepturi impedit. Earum?
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={flittoken}
                alt="flittoken website"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </SectionWithNoHeader>
      <SectionWithNoHeader>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <img
                src={awmi}
                alt="asosiasi wisata medis indonesia"
                className="img-fluid rounded"
              />
            </Col>
            <Col xs={12} md={6}>
              <h2 className="text-danger">Awmi</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates officiis, sed error accusantium impedit in cumque
                commodi. Maiores non eaque inventore doloribus perspiciatis
                quasi corporis esse veniam excepturi impedit. Earum?
              </p>
            </Col>
          </Row>
        </Container>
      </SectionWithNoHeader>
    </LayoutWithHeader>
  );
};

export default memo(Portfolio);

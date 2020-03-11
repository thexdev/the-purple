import React, { lazy, memo } from "react";
import { Container, Row, Col } from "react-bootstrap";

const LayoutWithHeader = lazy(() =>
  import("components/layout/layout-with-header")
);

const Portfolio = () => {
  return (
    <LayoutWithHeader title="Portfolio" subtitle="">
      <Container>
        <Row>
          <Col>
            <p className="text-center">M. Akbar Nugroho</p>
          </Col>
        </Row>
      </Container>
    </LayoutWithHeader>
  );
};

export default memo(Portfolio);

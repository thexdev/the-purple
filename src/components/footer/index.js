import React, { memo } from "react";
import Document from "./document";
import MadeWithReact from "./made-with-react";
import SocialMedia from "./social-media";
import TopProject from "./top-project";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <Document />
          </Col>
          <Col xs={6} md={3}>
            <SocialMedia />
          </Col>
          <Col xs={6} md={3}>
            <TopProject />
          </Col>
          <Col xs={6} md={3}>
            <MadeWithReact />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default memo(Footer);

import React, { lazy, memo } from "react";
import { Container, Row, Col } from "react-bootstrap";

const SectionHeader = lazy(() =>
  import("components/section-common/section-common-header")
);

function SectionGrid3(props) {
  return (
    <section className="pb-5 mb-5">
      <Container>
        <Row>
          <SectionHeader
            heading={props.heading}
            subheading={props.subheading}
            icon={props.icon}
          ></SectionHeader>
          {props.contents.map((content, index) => (
            <Col key={index} xs={12} md={4}>
              {content}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default memo(SectionGrid3);

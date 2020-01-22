import React, { memo, lazy } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

const SectionHeader = lazy(() =>
  import("components/section-common/section-common-header")
);

function SectionCustomContent(props) {
  return (
    <section className="pb-5 mb-5">
      <Container>
        <Row>
          <SectionHeader
            heading={props.heading}
            subheading={props.subheading}
            icon={props.icon}
          />
          <Col>{props.children}</Col>
        </Row>
      </Container>
    </section>
  );
}

SectionCustomContent.propsType = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  icon: PropTypes.icon
};

export default memo(SectionCustomContent);

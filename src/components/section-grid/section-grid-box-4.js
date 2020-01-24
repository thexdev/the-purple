import React, { memo, lazy } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

const SectionHeader = lazy(() =>
  import("components/section-common/section-common-header")
);
const Box = lazy(() => import("components/box"));

function SectionGrid4(props) {
  return (
    <section className="pb-5 mb-5">
      <Container>
        <Row>
          <SectionHeader
            heading={props.heading}
            subheading={props.subheading}
            icon={props.icon}
          />
          {props.contents.map((content, index) => (
            <Col key={index} xs={12} sm={6} md={3}>
              <Box icon={content.icon} content={content.content} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

SectionGrid4.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  icon: PropTypes.object,
  contents: PropTypes.array
};

export default memo(SectionGrid4);

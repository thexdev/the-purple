import React, { memo, lazy } from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";

const SectionHeader = lazy(() =>
  import("components/section-common/section-common-header")
);
const SectionContent = lazy(() => import("./section-common-content"));

function SectionCommon(props) {
  return (
    <section className="pb-5 mb-5">
      <Container>
        <Row>
          <SectionHeader
            heading={props.heading}
            subheading={props.subheading}
            icon={props.icon}
          />
          <SectionContent contents={props.contents} />
        </Row>
      </Container>
    </section>
  );
}

Section.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  icon: PropTypes.object,
  contents: PropTypes.func || PropTypes.array
};

export default memo(SectionCommon);

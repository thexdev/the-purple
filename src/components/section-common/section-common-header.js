import React, { memo, lazy } from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

const Icon = lazy(() => import("components/icon"));

function SectionHeader(props) {
  return (
    <Col xs={12} className="my-5 py-5">
      {/* Section Heading */}
      <Icon
        name={props.icon.name}
        alt={props.icon.alternative}
        className="d-block mx-auto"
      />
      <h2 className="text-uppercase text-center">{props.heading}</h2>
      {/* Section Sub-heading */}
      <p className="lead text-secondary text-center">{props.subheading}</p>
    </Col>
  );
}

SectionHeader.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  icon: PropTypes.object
};

export default memo(SectionHeader);

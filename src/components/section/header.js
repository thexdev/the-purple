import React, { memo } from "react";
import { Col } from "react-bootstrap";
import Icon from "components/icon";

const SectionHeader = props => {
  const { title, subtitle, icon } = props;
  return (
    <Col xs={12} className="my-5 py-5">
      {/* Section Heading */}
      <Icon
        name={icon.name}
        alt={icon.alternative}
        className="d-block mx-auto"
      />
      <h2 className="text-uppercase text-center">{title}</h2>
      {/* Section Sub-heading */}
      <p className="lead text-secondary text-center">{subtitle}</p>
    </Col>
  );
};

export default memo(SectionHeader);

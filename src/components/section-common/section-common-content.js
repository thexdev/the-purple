import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

function SectionContent(props) {
  const [contents] = useState(props.contents);

  return contents.map((content, index) => (
    // Section content
    <Col key={index} xs={12} md={4}>
      {content}
    </Col>
  ));
}

SectionContent.PropTypes = {
  contents: PropTypes.array
};

export default memo(SectionContent);

import React, {memo} from 'react';
import { Col } from "react-bootstrap";

function BlogWrapper(props) {
  return (  
    <Col xs={12} md={props.grid}>
      {props.children}
    </Col>
  );
}

BlogWrapper.defaultProps = {
  grid: 4
};

export default memo(BlogWrapper);
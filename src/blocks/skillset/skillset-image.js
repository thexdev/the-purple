import React, { memo } from 'react';
import { Col } from 'react-bootstrap';
import skillset from 'assets/images/about/skillset.svg';

const SkillsetImage = () => {
  return (
    <Col md={4}>
      <h3 className="text-uppercase text-center">Tech Stack</h3>
      <img
        src={skillset}
        alt="skillset"
        className="img-fluid shadow rounded border d-block"
      />
    </Col>
  );
};

export default memo(SkillsetImage);

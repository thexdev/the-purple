import React, { useState, memo } from 'react';
import Box from 'components/box';
import { Row, Col } from 'react-bootstrap';
import processor from 'assets/images/icon/processor.svg';

const icon = { name: processor, alternative: 'processor' };

const SkillsetContent = () => {
  const [skills] = useState([
    { title: 'JavaScript', description: '> 2 Years.' },
    { title: 'NodeJS', description: '> 2 Years.' },
    { title: 'ReactJS', description: '< 1 Year.' },
    { title: 'Python', description: '> 1 Year.' },
    { title: 'PHP', description: '> 2 Years.' },
    { title: 'Laravel', description: '< 1 Year.' },
  ]);

  return (
    <Col md={8}>
      <Row>
        <Col md={12}>
          <strong className="d-none d-md-block text-uppercase text-secondary text-center text-md-right">
            All Latest Technology I Use, See It All!
          </strong>
          <hr />
        </Col>
        {skills.map((skill, index) => (
          <Col sm={4} key={index}>
            <Box icon={icon} content={skill} />
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default memo(SkillsetContent);

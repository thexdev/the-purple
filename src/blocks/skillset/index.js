import React, { lazy, memo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SkillsetImage = lazy(() => import('./skillset-image'));
const SkillsetContent = lazy(() => import('./skillset-content'));

function Skillset() {
  return (
    <section>
      <Container className="mb-5 pb-5">
        <Row>
          <SkillsetImage />
          <SkillsetContent />
          <Col xs={12} className="text-center">
            <Link to="/about" className="btn btn-danger mt-3 rounded-pill">
              Show More
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default memo(Skillset);

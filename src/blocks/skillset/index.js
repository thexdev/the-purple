import React, { lazy, memo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const SkillsetImage = lazy(() => import("./skillset-image"));
const SkillsetContent = lazy(() => import("./skillset-content"));

function Skillset() {
  return (
    <section>
      <Container className="mb-5 pb-5">
        <Row>
          <SkillsetImage />
          <SkillsetContent />
          <Col xs={12}>
            <Button
              variant="danger"
              className="mx-auto d-block mt-3 rounded-pill"
            >
              Show More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default memo(Skillset);

import React, { lazy, useState, memo } from "react";
import { Row, Col } from "react-bootstrap";
import processor from "assets/images/icon/processor.svg";

const Box = lazy(() => import("components/box"));

function SkillsetContent() {
  const [skills] = useState([
    { title: "JavaScript", description: ">3 Years. Advanced" },
    { title: "NodeJS", description: ">2 Years. Intermediate" },
    { title: "ReactJS", description: "<1 Year. Intermediate" },
    { title: "Python", description: ">1 Year. Intermediate" },
    { title: "PHP", description: ">2 Years. Intermediate" },
    { title: "Laravel", description: "<1 Year. Beginner" }
  ]);

  const [icon] = useState({ name: processor, alternative: "processor" });

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
}

export default memo(SkillsetContent);
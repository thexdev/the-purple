import React, { memo, lazy } from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./style.css";

const HeroText = lazy(() => import("./hero-text"));
const HeroImage = lazy(() => import("./hero-image"));
const HeroWave = lazy(() => import("./hero-wave"));

function Hero() {
  return (
    <header>
      <Jumbotron fluid className="pb-0">
        <Container>
          <Row>
            {/* Hero Text - Title, Desciption, Call to action */}
            <Col md={6}>
              <HeroText />
            </Col>

            {/* Hero Image - A Descriptive Hero Image */}
            <Col md={6} className="d-none d-md-block">
              <HeroImage />
            </Col>
          </Row>
        </Container>

        {/* Hero Wave - An SVG Image to create Wave Effect */}
        <HeroWave />
      </Jumbotron>
    </header>
  );
}

export default memo(Hero);

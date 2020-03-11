import React, { memo } from "react";
import { Container, Row } from "react-bootstrap";
import SectionHeader from "./header";

const Section = props => {
  const { title, subtitle, icon } = props;
  return (
    <section className="pb-5 mb-5">
      <Container>
        <Row>
          <SectionHeader title={title} subtitle={subtitle} icon={icon} />
          {props.children}
        </Row>
      </Container>
    </section>
  );
};

export default memo(Section);

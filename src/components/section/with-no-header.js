import React, { memo } from 'react';
import { Container, Row } from 'react-bootstrap';

const WithNoHeader = ({ children }) => {
  return (
    <section className="pb-5 mb-5">
      <Container>
        <Row>{children}</Row>
      </Container>
    </section>
  );
};

export default memo(WithNoHeader);

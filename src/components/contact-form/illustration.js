import React, { memo } from "react";
import { Col } from "react-bootstrap";
import mailbox from "assets/images/contact-form/mailbox.svg";

const Illustration = () => {
  return (
    <Col md={5} className="d-none d-md-block">
      <img src={mailbox} alt="mailbox icon" className="img-fluid" />
    </Col>
  );
};

export default memo(Illustration);

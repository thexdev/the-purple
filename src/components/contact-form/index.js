import React, { memo } from "react";
import Section from "components/section";
import { Col, Form, FormControl } from "react-bootstrap";

import message from "assets/images/icon/message.svg";
import mailbox from "assets/images/contact-form/mailbox.svg";

const ContactForm = () => {
  const icon = {
    name: message,
    alternative: "message icon"
  };

  return (
    <Section title="contact" subtitle="lorem ipsum dolor sit amet" icon={icon}>
      <Col xs={12} md={7}>
        <h3 className="mb-5 text-center text-md-left">
          Fill the fields and <br /> send me your love message
        </h3>
        <Form>
          <Form.Group className="mb-5">
            <Form.Control size="lg" type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group className="mb-5">
            <FormControl size="lg" type="text" placeholder="Your email" />
          </Form.Group>
          <Form.Group>
            <FormControl
              as="textarea"
              placeholder="Your love message"
              rows={6}
            />
          </Form.Group>
        </Form>
      </Col>
      <Col md={5} className="d-none d-md-block">
        <img src={mailbox} alt="mailbox icon" className="img-fluid" />
      </Col>
    </Section>
  );
};

export default memo(ContactForm);

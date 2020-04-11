import React, { useState, memo } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { Col, Form, FormControl, Button } from "react-bootstrap";

import FormHelper from "helpers/form";

const MessageForm = () => {
  const [formMessage, setFormMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFailedToSentMessage = () => {
    swal({
      title: "Good news!",
      content: (
        <div>
          <p>You can send the message to:</p>
          <span className="badge badge-danger badge-pill">
            Email: akbarnugroho253@gmail.com
          </span>
          <br />
          <span className="badge badge-danger badge-pill">
            WhatsApp: 085296686526
          </span>
        </div>
      ),
      icon: "info",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let successAlert = {
      title: "Good job!",
      text: "Thanks, I will read your message soon!",
      icon: "success",
    };

    let failedAlert = {
      title: "Aw, snap!",
      text: "Something was wrong, but i can't handle it right now :(",
      icon: "error",
      dangerMode: true,
    };

    axios("https://thexdev.netlify.com/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: FormHelper.urlencoded({ "form-name": "message", ...formMessage }),
    })
      .then(() => swal(successAlert))
      .catch(() => swal(failedAlert).then(handleFailedToSentMessage));
  };

  const handleChange = (e) => {
    setFormMessage(
      Object.assign(formMessage, { [e.target.name]: e.target.value })
    );
  };

  return (
    <Col xs={12} md={7}>
      <h3 className="mb-5 d-none d-md-block text-center text-md-left">
        Fill the fields and <br /> send me your love message
      </h3>
      <Form
        name="message"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="message" />
        <Form.Group className="mb-3">
          <Form.Control
            size="lg"
            type="text"
            name="name"
            placeholder="Your name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <FormControl
            size="lg"
            type="text"
            name="email"
            placeholder="Your email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            size="lg"
            as="textarea"
            name="message"
            placeholder="Your love message"
            rows={6}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="text-center text-md-left">
          <Button type="submit" className="rounded-pill btn-danger btn-lg">
            Send message
          </Button>
        </Form.Group>
      </Form>
    </Col>
  );
};

export default memo(MessageForm);

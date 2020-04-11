import React, { memo } from "react";
import Section from "components/section";
import MessageForm from "./message-form";
import Illustration from "./illustration";

import message from "assets/images/icon/message.svg";

const ContactForm = () => {
  const icon = {
    name: message,
    alternative: "message icon"
  };

  return (
    <Section title="contact" subtitle="lorem ipsum dolor sit amet" icon={icon}>
      <MessageForm />
      <Illustration />
    </Section>
  );
};

export default memo(ContactForm);

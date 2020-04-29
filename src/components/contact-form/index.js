import React, { memo } from 'react';
import Section from 'components/section';
import MessageForm from './message-form';
import Illustration from './illustration';

import message from 'assets/images/icon/message.svg';

const icon = {
  name: message,
  alternative: 'message icon',
};

const ContactForm = () => {
  return (
    <Section
      title="contact"
      subtitle="text me with just a single click"
      icon={icon}
    >
      <MessageForm />
      <Illustration />
    </Section>
  );
};

export default memo(ContactForm);

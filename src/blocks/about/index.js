import React, { memo } from 'react';
import { Col } from 'react-bootstrap';
import Section from 'components/section';
import Skillset from 'blocks/skillset';
import vr from 'assets/images/icon/vr.svg';

const icon = {
  name: vr,
  alternative: 'robot',
};

const About = () => {
  return (
    <>
      <Section
        title="about me"
        subtitle="a freak and passionate person"
        icon={icon}
      >
        <Col xs={12} md={4}>
          <p className="text-left">
            So, I'm currently working as a web developer on{' '}
            <strong>PT Hayuning Indo Tech</strong>. This is my first year as a
            web developer on real world.
          </p>
          <p className="text-left">
            I really interested with latest technology specially on JavaScript
            and Python. I'm a fast learner, good attitude and easy going.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <p className="text-left">
            I always use modern tools and technology for every project i made.
            It cover's: <a href="spa">SPA</a>, <a href="pwa">PWA</a>,{' '}
            <a href="Containerization">Containerization</a> and{' '}
            <a href="Cloud Computing">Cloud Computing</a>.
          </p>
          <p className="text-left">
            My skill for programming language follow <code>HTML</code>,{' '}
            <code>CSS</code>, <code>JavaScript</code>, <code>PHP</code> and{' '}
            <code>Python</code>.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <p className="text-left">
            I'm able to operate some OS, such <a href="linux">Ubuntu</a>,{' '}
            <a href="windows">Windows 7, 8, 10</a> and <a href="osx">OSX</a>.
            I'm able to write documentation of code carefuly.
          </p>
          <p className="text-left">
            I love to work in orgenized and solve problem with team together. My
            team will really love me because i have a lot of free ebook for
            them.
          </p>
        </Col>
      </Section>
      <Skillset />
    </>
  );
};

export default memo(About);

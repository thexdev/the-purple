import React, { lazy, memo } from "react";

const Layout = lazy(() => import("components/layout"));
const Hero = lazy(() => import("blocks/hero"));
const About = lazy(() => import("blocks/about"));
const Service = lazy(() => import("blocks/services"));
const Portfolio = lazy(() => import("blocks/portfolio"));
const Github = lazy(() => import("blocks/github"));
const Blog = lazy(() => import("blocks/blog"));
const ContactForm = lazy(() => import("components/contact-form"));

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <hr />
      <Service />
      <hr />
      <Portfolio />
      <hr />
      <Github />
      <hr />
      <Blog />
      <hr />
      <ContactForm />
    </Layout>
  );
};

export default memo(Home);

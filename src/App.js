import React, { lazy, Suspense, memo } from "react";

const Navbar = lazy(() => import("components/navigation"));
const Hero = lazy(() => import("blocks/hero"));
const About = lazy(() => import("blocks/about"));
const Service = lazy(() => import("blocks/services"));
const Portfolio = lazy(() => import("blocks/portfolio"));
const Github = lazy(() => import("blocks/github"));
const Blog = lazy(() => import("blocks/blog"));

function App() {
  return (
    <Suspense fallback="loading...">
      <main>
        <Navbar />
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
      </main>
    </Suspense>
  );
}

export default memo(App);

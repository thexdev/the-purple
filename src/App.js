import React, { lazy, Suspense, memo } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("pages/home"));
const About = lazy(() => import("pages/about"));
const Service = lazy(() => import("pages/service"));
const Portfolio = lazy(() => import("pages/portfolio"));
const Blog = lazy(() => import("pages/blog"));
const Contact = lazy(() => import("pages/contact"));
const NotFound = lazy(() => import("pages/404"));

const App = () => {
  return (
    <Suspense fallback="loading...">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/services" component={Service} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default memo(App);

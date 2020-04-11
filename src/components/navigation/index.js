import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./style.css";

const Navigation = () => {
  return (
    <Navbar className="py-3" variant="dark" expand="lg" sticky="top">
      <Container>
        <Link to="/" className="navbar-brand">
          thexdev
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link mx-3">
              Home
            </Link>
            <Link to="/about" className="nav-link mx-3">
              About
            </Link>
            <Link to="/services" className="nav-link mx-3">
              Services
            </Link>
            <Link to="/portfolio" className="nav-link mx-3">
              Portfolio
            </Link>
            <Link to="/blog" className="nav-link mx-3">
              Blog
            </Link>
            <Link to="/contact" className="nav-link mx-3">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default memo(Navigation);

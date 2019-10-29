import React, { Component } from 'react';
import {
	Container,
	Navbar,
	Nav
} from 'react-bootstrap';
import './style.css';

export default class SiteNavbar extends Component {
	render() {
		return (
			<Navbar className="py-3" variant="dark" expand="lg" fixed="top">
				<Container>
					<Navbar.Brand href="/">thexdev</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link className="mx-3" href="#home">Home</Nav.Link>
							<Nav.Link className="mx-3" href="#">About</Nav.Link>
							<Nav.Link className="mx-3" href="#">Services</Nav.Link>
							<Nav.Link className="mx-3" href="#">Portfolio</Nav.Link>
							<Nav.Link className="mx-3" href="#">Blog</Nav.Link>
							<Nav.Link className="mx-3" href="#">Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}
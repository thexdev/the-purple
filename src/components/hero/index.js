import React, { Component } from 'react';

import {
	Jumbotron,
	Container,
	Row,
	Col
} from 'react-bootstrap';

import HeroText from './HeroText';
import HeroImage from './HeroImage';
import HeroWave from './HeroWave';

import './style.css';

export default class Hero extends Component {
	render() {
		return (
			<header>
				<Jumbotron fluid>
					<Container>
						<Row>
							{/* Hero Text - Title, Desciption, Call to action */}
							<Col md={6}>
								<HeroText />
							</Col>

							{/* Hero Image - A Descriptive Hero Image */}
							<Col md={6} className="d-none d-md-block">
								<HeroImage />
							</Col>
						</Row>
					</Container>
				</Jumbotron>
				{/* Hero Wave - An SVG Image to create Wave Effect */}
				<HeroWave />
			</header>
		);
	}
}
import React, { useState, memo } from 'react';
import { Col, Card } from 'react-bootstrap';
import Section from 'components/section';

import FlitToken from 'assets/images/portfolio/flit-token.png';
import Awmi from 'assets/images/portfolio/awmi.png';
import lppkpei from 'assets/iamges/lppkpei.png';
import rocket from 'assets/images/icon/rocket.svg';

const icon = {
  name: rocket,
  alternative: 'rocket icon',
};

const Portfolio = () => {
  const [images] = useState([
    {
      title: 'Flittoken',
      name: FlitToken,
      year: 2019,
      alternative: 'Flit token',
      url: 'https://flittoken.com',
    },
    {
      title: 'AWMI',
      name: Awmi,
      year: 2019,
      alternative: 'Asosiasi Wisata Medis Indonesia',
      url: 'https://awmi.co.id',
    },
    {
      title: 'LPPKPEI',
      name: lppkpei,
      year: 2019,
      alternative:
        'Lembaga Pendidikan dan Pelatihan Kerja (LPPK) Prima Elite Institute',
      url: 'http://lppkpei.com/',
    },
  ]);

  return (
    <Section
      title="portfolio"
      subtitle="see all things that i've done"
      icon={icon}
    >
      {images.map((image, index) => (
        <Col xs={12} md={4} key={index}>
          <Card className="shadow mb-3">
            <Card.Img
              src={image.name}
              alt={image.alternative}
              className="img-fluid shadow"
            ></Card.Img>
            <Card.Footer>
              <span className="badge badge-pill badge-warning mr-3 px-2 border-0">
                {image.year}
              </span>
              <a href={image.url} className="text-danger text-decoration-none">
                {image.title}
              </a>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Section>
  );
};

export default memo(Portfolio);

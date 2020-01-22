import React, { useState, lazy, memo } from "react";
import { Row, Col, Card } from "react-bootstrap";
import FlitToken from "assets/images/portfolio/flit-token.png";
import Awmi from "assets/images/portfolio/awmi.png";
import rocket from "assets/images/icon/rocket.svg";

const SectionCustom = lazy(() => import("components/section-custom/"));

function Portfolio() {
  const [icon] = useState({
    name: rocket,
    alternative: "rocket icon"
  });

  const [images] = useState([
    {
      title: "Flittoken",
      name: FlitToken,
      year: 2019,
      alternative: "Flit token",
      url: "https://flittoken.com"
    },
    {
      title: "AWMI",
      name: Awmi,
      year: 2019,
      alternative: "Asosiasi Wisata Medis Indonesia",
      url: "https://awmi.co.id"
    }
  ]);

  return (
    <SectionCustom
      heading="portfolio"
      subheading="lorem ipsum dolor sit amet"
      icon={icon}
    >
      <Row>
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
                <a
                  href={image.url}
                  className="text-danger text-decoration-none"
                >
                  {image.title}
                </a>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </SectionCustom>
  );
}

export default memo(Portfolio);

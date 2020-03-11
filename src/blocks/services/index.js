import React, { useState, memo } from "react";
import { Col } from "react-bootstrap";
import Section from "components/section";
import Box from "components/box";

import layers from "assets/images/icon/layers.svg";
import gem from "assets/images/icon/gem.svg";
import cookie from "assets/images/icon/cookie.svg";
import cog from "assets/images/icon/cog.svg";
import thunder from "assets/images/icon/thunder.svg";
import cart from "assets/images/icon/cart.svg";
import website from "assets/images/icon/website.svg";
import wrench from "assets/images/icon/wrench.svg";
import equaliser from "assets/images/icon/equaliser.svg";

const Services = () => {
  const [services] = useState([
    {
      icon: {
        name: gem,
        alternative: "gem icon"
      },
      content: {
        title: "slicing mockup",
        description: "lorem ipsum dolor sit amet"
      }
    },
    {
      icon: {
        name: cookie,
        alternative: "cookie icon"
      },
      content: {
        title: "redesign web",
        description: "lorem ipsum dolor sit amet"
      }
    },
    {
      icon: {
        name: cog,
        alternative: "gear icon"
      },
      content: {
        title: "microservice",
        description: "lorem ipsum dolor sit amet"
      }
    },
    {
      icon: {
        name: thunder,
        alternative: "thunder icon"
      },
      content: {
        title: "rest api",
        description: "lorem ipsum dolor sit amet"
      }
    },
    {
      icon: {
        name: cart,
        alternative: "ecommers icon"
      },
      content: {
        title: "e-commers",
        description: "lorem ipsum dolor sit amet"
      }
    },
    {
      icon: {
        name: website,
        alternative: "website icon"
      },
      content: {
        title: "blog",
        description: "lorem ipsum dolor sit amet"
      }
    },
    {
      icon: {
        name: equaliser,
        alternative: "setup icon"
      },
      content: {
        title: "setup vps",
        description: "lorem ipsum dolor sit amet"
      }
    },
    {
      icon: {
        name: wrench,
        alternative: "wrench icon"
      },
      content: {
        title: "maintenance",
        description: "lorem ipsum dolor sit amet"
      }
    }
  ]);

  const icon = {
    name: layers,
    alternative: "layers icon"
  };

  return (
    <Section
      title="services"
      subtitle="choose what you need, i'll create that"
      icon={icon}
    >
      {services.map((service, index) => (
        <Col key={index} xs={12} sm={6} md={3}>
          <Box icon={service.icon} content={service.content} />
        </Col>
      ))}
    </Section>
  );
};

export default memo(Services);

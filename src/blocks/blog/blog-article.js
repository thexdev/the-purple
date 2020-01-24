import React, { memo } from "react";
import { Card } from "react-bootstrap";

function BlogArticle() {
  return (
    <Card>
      <Card.Img src="https://placehold.it/500x250" />
      <Card.Body>
        <Card.Title>Akbar</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default memo(BlogArticle);

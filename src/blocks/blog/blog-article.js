import React, { memo } from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";

function BlogArticle(props) {
  return (
    <Card>
      <Card.Link href={props.url} className="text-dark">
        <Card.Img src={props.cover} />
        <Card.Body>
          <small className="text-secondary">
            <Moment format="LLLL">{props.date}</Moment>
          </small>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          {props.tags.map((tag, index) => (
            <span className="badge badge-danger badge-pill mr-1" key={index}>
              {tag}
            </span>
          ))}
        </Card.Body>
      </Card.Link>
    </Card>
  );
}

export default memo(BlogArticle);

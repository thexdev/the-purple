import React, { useEffect, useState, memo } from "react";
import { Container, Row } from "react-bootstrap";

import Wrapper from "blocks/blog/blog-wrapper";
import Article from "blocks/blog/blog-article";
import NoArticle from "blocks/blog/blog-no-article";
import LayoutWithHeader from "components/layout/layout-with-header";

import axios from "axios";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles/?username=thexdev")
      .then(response => setArticles(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <LayoutWithHeader title="Blog" subtitle="Share My Knowledge To Everyone">
      <Container>
        <Row>
          {articles.length > 0 ? (
            articles.map(article => (
              <Wrapper key={article.id}>
                <Article
                  title={article.title}
                  description={article.description}
                  cover={article.cover_image}
                  date={article.published_at}
                  tags={article.tag_list}
                  url={article.url}
                />
              </Wrapper>
            ))
          ) : (
            <Wrapper grid={12}>
              <NoArticle />
            </Wrapper>
          )}
        </Row>
      </Container>
    </LayoutWithHeader>
  );
};

export default memo(Blog);

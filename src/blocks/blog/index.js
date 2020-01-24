import React, { lazy, useState, useEffect, memo } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

import cridential from "cridentials/api/devto.json";
import newspaper from "assets/images/icon/newspaper.svg";

const CustomSection = lazy(() => import("components/section-custom"));
const Wrapper = lazy(() => import("./blog-wrapper"));
const Article = lazy(() => import("./blog-article"));
const NoArticle = lazy(() => import("./blog-no-article"));

function Blog() {
  const [articles, setArticles] = useState([]);

  const options = { headers: { "api-key": cridential.token } };
  const icon = { name: newspaper, alternative: "newspaper icon" };

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles/me", options)
      .then(response => setArticles(response))
      .catch(console.error);
  }, [articles, options]);

  return (
    <CustomSection
      heading="blog"
      subheading="lorem ipsum dolor sit amet"
      icon={icon}
    >
      <Container>
        <Row>
          {articles > 0 ? (
            articles.map(article => (
              <Wrapper key={article.id}>
                <Article
                  title={article.title}
                  description={article.description}
                  cover={article.cover}
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
    </CustomSection>
  );
}

export default memo(Blog);

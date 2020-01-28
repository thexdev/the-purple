import React, { lazy, useState, useEffect, memo } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import newspaper from "assets/images/icon/newspaper.svg";

const CustomSection = lazy(() => import("components/section-custom"));
const Wrapper = lazy(() => import("./blog-wrapper"));
const Article = lazy(() => import("./blog-article"));
const NoArticle = lazy(() => import("./blog-no-article"));

function Blog() {
  const [articles, setArticles] = useState([]);
  const icon = { name: newspaper, alternative: "newspaper icon" };

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?username=thexdev")
      .then(response => setArticles(response))
      .catch(error => console.error(error));
  }, [articles]);

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
    </CustomSection>
  );
}

export default memo(Blog);

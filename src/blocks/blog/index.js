import React, { useState, useEffect, memo } from "react";
import Section from "components/section";
import Wrapper from "./blog-wrapper";
import Article from "./blog-article";
import NoArticle from "./blog-no-article";

import axios from "axios";
import newspaper from "assets/images/icon/newspaper.svg";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  const icon = {
    name: newspaper,
    alternative: "newspaper icon"
  };

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles/?username=thexdev")
      .then(response => setArticles(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Section title="blog" subtitle="lorem ipsum dolor sit amet" icon={icon}>
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
    </Section>
  );
};

export default memo(Blog);

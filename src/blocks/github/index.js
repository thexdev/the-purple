import React, { useState, useEffect, lazy, memo } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import doc from "assets/images/icon/doc.svg";

const SectionCustom = lazy(() => import("components/section-custom/"));
const GithubBox = lazy(() => import("components/github-box"));

function Github() {
  const [icon] = useState({
    name: doc,
    alternative: "document icon"
  });

  const [repos, setRepos] = useState([]);

  const stripHyphens = str => str.split("-").join(" ");

  let githubApi = `https://api.github.com/users/thexdev/repos`;

  useEffect(() => {
    axios
      .get(githubApi)
      .then(response => setRepos(response.data))
      .catch(console.error);
  }, [repos, githubApi]);

  return (
    <SectionCustom
      heading="repository"
      subheading="lorem ipsum dolor sit amet"
      icon={icon}
    >
      <Row>
        {repos.map(repo => (
          <Col key={repo.id} xs={12} md={3}>
            <GithubBox
              image={{
                name: repo.owner.avatar_url,
                aleternative: "M. Akbar Nugroho"
              }}
              content={{
                title: stripHyphens(repo.name),
                description: repo.description
              }}
            />
          </Col>
        ))}
      </Row>
    </SectionCustom>
  );
}

export default memo(Github);

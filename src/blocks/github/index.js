import React, { useState, useEffect, memo } from 'react';
import { Col } from 'react-bootstrap';
import Section from 'components/section';
import GithubBox from 'components/github-box';

import axios from 'axios';
import StrHelper from 'utils/string';
import doc from 'assets/images/icon/doc.svg';

const icon = {
  name: doc,
  alternative: 'document icon',
};

const Github = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/thexdev/repos')
      .then((response) => setRepos(response.data))
      .catch(console.error);
  }, []);

  return (
    <Section
      title="repository"
      subtitle="i'm an open source person, fork it all"
      icon={icon}
    >
      {repos.map((repo) => (
        <Col key={repo.id} xs={12} md={3}>
          <GithubBox
            image={{
              name: repo.owner.avatar_url,
              aleternative: 'M. Akbar Nugroho',
            }}
            content={{
              title: StrHelper.stripHypens(repo.name),
              description: repo.description,
            }}
          />
        </Col>
      ))}
    </Section>
  );
};

export default memo(Github);

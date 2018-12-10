import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';

const CompareList = ({ repos }) => (
  <Container>
    {repos.map(repo => (
      <Repository key={repo.id}>
        <header>
          <img src={repo.owner.avatar_url} alt="facebook" />
          <strong>{repo.name}</strong>
          <small>{repo.owner.login}</small>
        </header>
        <ul>
          <li>
            {repo.stargazers_count}
            <small>stars</small>
          </li>
          <li>
            {repo.forks_count}
            <small>forks</small>
          </li>
          <li>
            {repo.open_issues_count}
            <small>issues</small>
          </li>
          <li>
            {repo.lastCommit}
            <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      lastCommit: PropTypes.string,
    }),
  ).isRequired,
};

export default CompareList;

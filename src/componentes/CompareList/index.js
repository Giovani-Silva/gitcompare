import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';

import ButtonAction from '../ButtonAction';

const CompareList = ({ repos, refresh, remove }) => (
  <Container>
    {repos.map(repo => (
      <Repository key={repo.id}>
        <header>
          <div className="actions">
            <ButtonAction icon="refresh" color="darkgray" action={refresh} id={repo.id} />
            <ButtonAction icon="trash-o" color="palevioletred" action={remove} id={repo.id} />
          </div>
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

CompareList.defaultProps = {
  refresh: () => 'set the action to refresh repo card',
  remove: () => 'set the action to remove repo card',
};
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
  refresh: PropTypes.func,
  remove: PropTypes.func,
};

export default CompareList;

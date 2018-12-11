import React, { Component } from 'react';
import moment from 'moment';
import ls from 'local-storage';
import api from '../../services/api';

import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../componentes/CompareList';

class Main extends Component {
  state = {
    loading: false,
    repositoryInput: '',
    repoError: false,
    repositories: [],
  };

  componentDidMount() {
    const repositories = ls.get('repositories') || null;
    if (repositories) this.setState({ repositories });
  }

  handleAddRepository = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { repositoryInput, repositories } = this.state;
    try {
      const { data: repo } = await api.get(`/repos/${repositoryInput}`);
      repo.lastCommit = moment(repo.pushed_at).fromNow();
      this.setState({
        repositoryInput: '',
        repoError: false,
        repositories: [...repositories, repo],
      });
    } catch (err) {
      this.setState({ repoError: true });
    } finally {
      this.setState({ loading: false });
      ls.set('repositories', this.state.repositories);
    }
  };

  handleRefreshRepository = async (id, e) => {
    e.preventDefault();
    const repository = this.state.repositories.filter(repo => repo.id === id)[0];

    if (!repository) return;

    const { data: repoUpdated } = await api.get(
      `/repos/${repository.owner.login}/${repository.name}`,
    );

    repoUpdated.lastCommit = moment(repoUpdated.pushed_at).fromNow();

    const repositories = this.state.repositories.map((r) => {
      if (repoUpdated.id === r.id) return repoUpdated;

      return r;
    });
    this.setState({ repositories: [...repositories] });
    ls.set('repositories', repositories);
  };

  handleRemoveRepository = (id, e) => {
    e.preventDefault();
    const repos = this.state.repositories.filter(repo => repo.id !== id);
    ls.set('repositories', repos);
    this.setState({ repositories: repos });
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={this.state.repoError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>
        <CompareList
          repos={this.state.repositories}
          refresh={this.handleRefreshRepository}
          remove={this.handleRemoveRepository}
        />
      </Container>
    );
  }
}

export default Main;

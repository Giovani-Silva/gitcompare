import React, { Component } from 'react';
import moment from 'moment';
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

  handleAddRepository = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      const { data: repos } = await api.get(`/repos/${this.state.repositoryInput}`);
      repos.lastCommit = moment(repos.pushed_at).fromNow();
      this.setState({
        repositoryInput: '',
        repoError: false,
        repositories: [...this.state.repositories, repos],
      });
    } catch (err) {
      this.setState({ repoError: true });
    } finally {
      this.setState({ loading: false });
    }
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
        <CompareList repos={this.state.repositories} />
      </Container>
    );
  }
}

export default Main;

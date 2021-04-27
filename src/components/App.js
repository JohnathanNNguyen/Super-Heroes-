import React from 'react';
import SearchBar from './SearchBar';
import superHeroAPI from '../api/SuperHeroAPI';
import HeroList from './HeroList';
import Header from './Header';
import './app.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// bootstrap
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  state = { heroInfo: [] };

  componentDidMount() {
    this.onHeroSearch();
  }

  onHeroSearch = async (input) => {
    const response = await superHeroAPI.get(`/characters`, {
      // params: {
      //   nameStartsWith: input,
      //   limit: '50',
      // },
    });
    this.setState({ heroInfo: response.data.data.results });
    console.log('heroInfo', this.state.heroInfo);
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <SearchBar onSearch={this.onHeroSearch} />
          <HeroList images={this.state.heroInfo} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;

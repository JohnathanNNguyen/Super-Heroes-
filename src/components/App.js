import React from 'react';
import SearchBar from './SearchBar';
import superHeroAPI from '../api/SuperHeroAPI';
import HeroList from './HeroList';
import './app.css';
// bootstrap
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  state = { heroInfo: [] };

  componentDidMount() {
    this.onHeroSearch();
  }

  onHeroSearch = async (input) => {
    const response = await superHeroAPI.get(`/characters`, {
      params: {
        nameStartsWith: input,
      },
    });
    this.setState({ heroInfo: response.data.data.results });
    console.log('heroInfo', this.state.heroInfo);
  };

  render() {
    return (
      <Container>
        <SearchBar onSearch={this.onHeroSearch} />

        <HeroList images={this.state.heroInfo} />
      </Container>
    );
  }
}

export default App;

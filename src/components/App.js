import React from 'react';
import SearchBar from './SearchBar';
// import superHeroAPI from '../api/SuperHeroAPI';
import axios from 'axios';
import HeroList from './HeroList';

class App extends React.Component {
  state = { heroInfo: [] };

  onHeroSearch = async (input) => {
    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters`,
      {
        params: {
          nameStartsWith: input,
          apikey: process.env.REACT_APP_PUBLIC_KEY,
        },
      }
    );
    this.setState({ heroInfo: response.data.data.results });
    console.log('heroInfo', this.state.heroInfo);
  };
  render() {
    return (
      <div>
        <SearchBar onSearch={this.onHeroSearch} />
        <HeroList images={this.state.heroInfo} />
      </div>
    );
  }
}

export default App;

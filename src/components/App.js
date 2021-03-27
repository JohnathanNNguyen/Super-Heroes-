import React from 'react';
import SearchBar from './SearchBar';
// import superHeroAPI from '../api/SuperHeroAPI';
import axios from 'axios';

class App extends React.Component {
  state = { heroInfo: [] };

  onHeroSearch = async (input) => {
    const response = await axios.get(
      'https://gateway.marvel.com/v1/public/characters',
      {
        params: {
          apikey: process.env.REACT_APP_PUBLIC_KEY,
        },
      }
    );
    this.setState({ heroInfo: response.data.data.results });
  };
  render() {
    return <SearchBar onSearch={this.onHeroSearch} />;
  }
}

export default App;

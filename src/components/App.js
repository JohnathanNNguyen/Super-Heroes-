import React from 'react';
// import SearchBar from './SearchBar';
// import superHeroAPI from '../api/SuperHeroAPI';
import axios from 'axios';
// import HeroList from './HeroList';
import './app.css';

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
      // <div>
      //   <SearchBar onSearch={this.onHeroSearch} />
      //   <HeroList images={this.state.heroInfo} />
      // </div>
      <React.Fragment>
        <a href="#sec-1">sec1</a>
        <a href="#sec-2">sec2</a>
        <div className="blank"></div>
        <div className="sec1" id="sec-1"></div>
        <div className="sec2" id="sec-2"></div>
      </React.Fragment>
    );
  }
}

export default App;

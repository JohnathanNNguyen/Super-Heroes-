import React from 'react';
import SearchBar from './SearchBar';
import superHeroAPI from '../api/SuperHeroAPI';
import HeroList from './HeroList';
import Header from './Header';
import './app.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// bootstrap
import Container from 'react-bootstrap/Container';
import HeroDetails from './HeroDetails';
import SuperHeroAPI from '../api/SuperHeroAPI';

class App extends React.Component {
  state = { heroInfo: [], heroComics: [] };

  componentDidMount() {
    this.onHeroSearch();
  }

  onHeroSearch = async (input) => {
    const response = await superHeroAPI.get(`/characters`, {
      params: {
        nameStartsWith: input,
        limit: '50',
      },
    });
    this.setState({ heroInfo: response.data.data.results });
    console.log('heroInfo', this.state.heroInfo);
  };

  onGetComics = async (data) => {
    const response = await SuperHeroAPI.get(`/characters/${data}/comics`, {
      params: {
        limit: '50',
      },
    });
    this.setState({ heroComics: response.data.data.results });
    console.log(this.state.heroComics);
    window.location.href = '/comics';
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Container>
            <Switch>
              <Route exact path="/">
                <SearchBar onSearch={this.onHeroSearch} />
                <HeroList
                  images={this.state.heroInfo}
                  onGetComics={this.onGetComics}
                />
              </Route>
              <Route path="/hero/details">
                <HeroDetails />
              </Route>
              <Route path="/comics">
                <HeroDetails comics={this.state.heroComics} />
              </Route>
            </Switch>
          </Container>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

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

class App extends React.Component {
  state = { heroInfo: [] };

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

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Container>
            <Switch>
              <Route exact path="/">
                <SearchBar onSearch={this.onHeroSearch} />
                <HeroList images={this.state.heroInfo} />
              </Route>
              <Route path="/hero/details">
                <HeroDetails />
              </Route>
            </Switch>
          </Container>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

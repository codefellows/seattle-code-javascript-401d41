import React from 'react';
import superagent from 'superagent';

import List from './list';
import Home from './home.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  // componentDidMount is a class based/old school method for handling part of the react lifecycle
  // we will use a method called "useEffect" that does this and all other lifecycle hooks
  // when we get to functional components
  async componentDidMount() {
    let response = await superagent.get('https://pokeapi.co/api/v2/pokemon');
    this.setState({ items: response.body.results });
  }

  render() {
    let items = this.state.items.map((pokemon, i) => <li key={i}>{pokemon.name}</li>);

    return (
      <main>
        <Home />
        <List>{items}</List>
      </main>
    )
  }
}

export default Main;
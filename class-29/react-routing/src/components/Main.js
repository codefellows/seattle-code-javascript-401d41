import React from 'react';
import { Route, Switch } from 'react-router-dom';

import List from './list/List.js';
import Home from './Home.js';

const Main = props => {
  let items = ['pencil', 'fish', 'cookie', 'box', 'shirt', 'great', 'snail'];
  let listItems = items.map((item, i) => {
    return <li key={i}>{item}</li>
  })

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list">
          <List>
            {listItems}
          </List>
        </Route>
      </Switch>
    </main>
  )
}

export default Main;
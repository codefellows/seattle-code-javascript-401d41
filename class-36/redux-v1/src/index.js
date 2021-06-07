import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' // the react redux plugin

import store from './store'; // we haven't built the redux/react config yet - vanilla redux
import App from './app.js';


function Entry() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<Entry />, root);

// REDUX:
// - action ->  votes.js -> implemented them with action creators (functions that return actions)
// - reducer -> votes.js -> a pure function, that evals an action.type, and returns a new state
// - store -> takes in our reducers, which can hand off a new state

// REDUX:
// - combineReducers -> allows us to add as many reducers to the store as we want (today, we have one)
// - createStore -> creates the store for us, based on our reducers

// REACT-REDUX:
// - <Provider> - which contains a prop called "store" that takes in our store created from createStore
// - that ends up looking like this <Provider store={createdStore} />

// REACT-REDUX:
// - connect -> connects state and props to our Redux state management for a component
// - mapStateToProps -> does exactly that
// - mapDispatchToProps -> does exactly that -> these come from action creators (votes.js)

// BASIC REACT & REDUX WORKFLOW:
// - action -> dispatched -> reducer -> which evals the action.type -> reducer creates a new state ->
// - hands of the new state to createStore (because createStore takes in all reducers)
// - this is then handed off to a <Provider>, which takes in the store and gives it to our <App /> for consumption

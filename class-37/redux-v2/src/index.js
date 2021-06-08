import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './style.css';

import store from './store'; // the configuration file for our Redux store (uses createStore)
import App from './app.js';

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));
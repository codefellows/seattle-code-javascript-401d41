import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import App from './components/app.js';

class Entry extends React.Component {
  render() {
    return (
      <App />
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<Entry />, root);
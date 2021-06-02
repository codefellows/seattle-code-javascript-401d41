import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import './styles/core.scss';

function Entry() {
  return (
    <App />
  )
}

const root = document.getElementById('entry-point');
ReactDOM.render(<Entry />, root);
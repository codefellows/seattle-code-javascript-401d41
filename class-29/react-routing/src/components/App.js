import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header.js';
import Main from './Main.js';
import '../core.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;

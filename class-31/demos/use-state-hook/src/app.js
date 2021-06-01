import React from 'react';
import Counter from './counter.js';
import Age from './age.js';

function App() {
  return (
    <>
      <Age />
      <Age age="20" />
      <Age age="40" />
      <Age age="60" />

      <Counter />
    </>
  );
}

export default App;

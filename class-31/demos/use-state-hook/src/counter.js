import React from 'react';
import { useState } from 'react';

// first lesson of a "functional" component is that it is a literal function
function Counter() {

  // setup of initial state
  // "clicks" is essentially this.state.clicks -> useState(0) sets the initial value of "clicks" to "0"
  // "setClicks" is a method that updates the state of "clicks" when we call it with an argument
  const [clicks, setClicks] = useState(0);
  const [factorOfFive, setFactorOfFive] = useState(false);

  const increment = () => {
    let newCount = clicks + 1;
    setClicks(newCount);
    setFactorOfFive(newCount > 0 && newCount % 5 === 0);
  }

  return (
    <section>
      <h1>The button has been click {clicks} times!</h1>
      <h3>This is a factor of five: {factorOfFive.toString()}</h3>
      <button onClick={increment}>+</button>
    </section>
  )
}

export default Counter;
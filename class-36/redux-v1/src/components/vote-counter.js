import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, reset } from '../store/votes.js';

const VotesCounter = props => {
  return (
    <section>
      <ul>
        {props.counter.candidates.map(person => {
          return <li onClick={() => props.increment(person.name)} key={person.name}>{person.name} : {person.votes}</li>
        })}
      </ul>
    </section>
  )
}

// this method needs to be called "mapStateToProps"
// and it does EXACTLY that -> it maps the state of our app (handled in redux) to a prop
// reference: props.counter above -> this is the same as this.state.counter
const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = { increment, decrement, reset }

// the following is the same as the shorthand version above:

// const mapDispatchToProps = ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
//   reset: () => dispatch(reset())
// });

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);
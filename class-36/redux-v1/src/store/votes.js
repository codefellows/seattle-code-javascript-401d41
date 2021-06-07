// setup of initial state
let initialState = {
  candidates: [
    { name: 'Sam', votes: 0 },
    { name: 'Sally', votes: 0 },
    { name: 'Bobby', votes: 0 }
  ],
  totalVotes: 0
}

// a reducer is meant to evaluate the TYPE of an action
// and then create a new (copy) of the state to be handed off to the redux store
// it is also: a pure function and uses a SWITCH statement convention
export default (state = initialState, action) => {
  let { type, payload } = action;

  // same as above:
  // let type = action.type;
  // let payload = action.payload;

  switch(type) {
    case 'INCREMENT':
      let totalVotes = state.totalVotes + 1;
      let candidates = state.candidates.map(candidate => {
        if (candidate.name === payload) {
          return { name: candidate.name, votes: candidate.votes + 1 }
        }
        return candidate;
      });

      console.log('__initialState__', initialState);
      console.log('total', totalVotes)
      console.log('candidates', totalVotes)

      return { totalVotes, candidates };

    case 'RESET':
      return initialState;
    
    default:
      return state;
  }
}

// an action creator is simply a function that returns an action
export const increment = (name) => {
    // an action is simply an object literal with a type (to be evaluated in a reducer) and a payload (data)
    return {
      type: 'INCREMENT',
      payload: name
    }
}


// same as above, just with different name -> all an action creator does is return an action
export const decrement = (name) => {
  return {
    type: 'DECREMENT',
    payload: name
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}
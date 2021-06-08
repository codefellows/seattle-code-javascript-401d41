let initialState = [
  { name: 'Donald', votes: 0 },
  { name: 'Joe', votes: 0 },
  { name: 'Hillary', votes: 0 }
];

// TODO: create reducer with SWITCH to eval actions
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'INCREMENT':
      return state.map(candidate => {
        if (candidate.name === payload.name) {
          return { name: candidate.name, votes: candidate.votes + 1 }
        }

        return candidate;
      });

    case 'DISABLE':
      console.log('__STATE__', state);
      return state.map(person => {
        if (person.name === payload.name) {
          return {...person, disabled: true }
        }

        return person;
      });

    case 'RESET':
      return initialState;

    default:
        return state;
  }
}

// the function surrounding these actions are referred to as "action creators"
// and thier job is to return an "action" -> an action is simply an object w/ a TYPE and PAYLOAD to eval in a reducer
export const increment = (person) => {
  return {
    type: 'INCREMENT',
    payload: person
  }
}

export const disable = (person) => {
  return {
    type: 'DISABLE',
    payload: person
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}
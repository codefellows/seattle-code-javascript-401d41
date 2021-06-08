import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// pull in our reducers - we have 2 reducers vs 1 reducer yesterday
// we actually could have just passed the reducer straight into createStore if we only have 1
// BUT we don't do that because there is always the possibility of having more
import candidates from './candidates.js';
import votes from './votes.js';

// NEW FOR TODAY:
let reducers = combineReducers({ candidates, votes });

const store = () => {
  console.log(createStore(reducers));
  return createStore(reducers, composeWithDevTools());
}

export default store();
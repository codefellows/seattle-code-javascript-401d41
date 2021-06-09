import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { thunk } from 'redux-thunk'; - you can install this

import thunk from './middleware/thunk.js';
import reducer from './reducers.js';

let reducers = combineReducers({
  data: reducer
});

const store = () => {
  console.log(createStore(reducers, applyMiddleware(thunk)));
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
};

export default store();
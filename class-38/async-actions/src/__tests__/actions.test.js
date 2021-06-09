import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as actions from '../store/actions.js';

// this is basically the same thing as createStore(applyMiddleware(thunk))
const mockStore = configureMockStore([thunk]);

describe('ASYNC ACTION CREATOR:', () => {
  it('should create and do a GET action', () => {
    const store = mockStore({ results: [] });
    let dispatchedActions = store.getActions();

    console.log(dispatchedActions);
    // expect(dispatchedActions[0].type).toEqual('GET');
  })
})
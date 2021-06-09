import reducer from '../store/reducers.js';

describe('App Reducer', () => {
  it('evaluates an action with the proper type and payload', () => {
    let mockInitialState = {};

    let mockAction = {
      type: 'GET',
      payload: 'test'
    }

    expect(reducer(mockInitialState, mockAction)).toEqual(mockAction.payload);
  })
})
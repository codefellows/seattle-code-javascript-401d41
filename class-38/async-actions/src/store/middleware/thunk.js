// do not create and use your own thunk middleware in the future, just npm i redux-thunk
export default store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState) // this is right here is where thunk and applyMiddleware take care of your heavy lifting
    : next(action)
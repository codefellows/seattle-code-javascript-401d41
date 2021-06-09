let initialState = { results: [] };

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case 'GET':
      return payload
    default:
      return state
  }
}
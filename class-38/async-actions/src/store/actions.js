import superagent from 'superagent';

let api = 'https://api-js401.herokuapp.com/api/v1/todo';

// async action creator
export const getRemoteData = () => dispatch => {
  return superagent.get(api)
    .then(response => {
      console.log('DATA:', response.body);
      dispatch(getAction(response.body))
    })
}

// another form of making an async action creator
export const putRemoteData = (id, data) => async dispatch => {
  let response = await superagent.put(`${api}/${id}`).send(data);
  console.log(response.body)
}

// this is a regular action creator -> it is a function that returns an action
export const getAction = data => {
  return {
    type: 'GET',
    payload: data
  }
}

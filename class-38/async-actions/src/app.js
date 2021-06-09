import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions.js';

import './style.css';

const App = props => {
  const fetchData = (e) => {
    e && e.preventDefault();
    props.get();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <button onClick={fetchData}>Go get team info!</button>

      {props.data.results.map((record, idx) => (
        <form>
          <input type="text" placeholder={record.text} />
          <input type="hidden" name="id" defaultValue={record.id} />
        </form>
      ))}
    </>
  )
}

const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData())
})

const mapStateToProps = state => ({
  data: state.data
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
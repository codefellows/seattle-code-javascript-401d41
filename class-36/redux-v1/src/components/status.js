import React from 'react';
import { connect } from 'react-redux';

const Status = props => {
  return (
    <section>
      <p>{props.totalVotes}</p>
    </section>
  )
}

const mapStateToProps = state => ({
  totalVotes: state.counter.totalVotes
});

export default connect(mapStateToProps)(Status);
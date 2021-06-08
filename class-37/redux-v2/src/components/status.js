import React from 'react';
import { connect } from 'react-redux';

const Status = props => {
  return (
    <section>
      <p>Total Votes: {props.votes.totalVotes}</p>
    </section>
  )
}

const mapStateToProps = state => ({
  votes: state.votes,
  candidates: state.candidates
})

export default connect(mapStateToProps)(Status);
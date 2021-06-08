import React from 'react';
import { connect } from 'react-redux';

import { increment, disable, reset } from '../store/candidates.js';

const VotesCounter = props => {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map(person => 
            <tr
              className={person.disabled ? 'disabled' : ''}
              key={person.name}
            >
              <td onClick={() => person.disabled ? {} : props.increment(person)}>{person.name}</td>
              <td>{person.votes}</td>
              <td>
                <button onDoubleClick={() => props.disable(person)}>Disable</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <button className="reset-btn" onClick={props.reset}>Reset</button>
    </section>
  )
}

const mapDispatchToProps = { increment, disable, reset };

const mapStateToProps = state => ({
  candidates: state.candidates,
  votes: state.votes
})

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);
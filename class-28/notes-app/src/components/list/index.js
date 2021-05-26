import React from 'react';
import { When } from '../if'
import './_list.scss';

export default props => (
  <React.Fragment>
    <ul className="list">
      {props.children}
    </ul>

    <When condition={props.children.length > 500}>
      <div>Cool there is more than 5 items in this list!</div>
    </When>
  </React.Fragment>
)
import React from 'react';
import { When } from '../if';

export default (props) => {
  return (
    <>
      <ul>{props.children}</ul>
      <When condition={props.children.length > 5}>
        <p>Great - lots of items in the list</p>
      </When>
    </>
  )
}
import React from 'react';
import { LoginContext } from './context.js';

const If = props => {
  return props.condition ? props.children : null;
}

class Auth extends React.Component {
  static contextType = LoginContext;

  render() {
    let okToRender = false;
    try {
      okToRender = 
      this.context.loggedIn && (
        this.props.capability ?
          this.context.user.capabilities(this.props.capability) : true)
    } catch (e) {
      console.warn('not authorized');
    }

    return (
      <If condition={okToRender}>
        <div>{this.props.children}</div>
      </If>
    )
  }
}

export default Auth;
import React from 'react';
import { ThemeContext } from '../context/theme.js';

class ThemeComponent extends React.Component {
  static contextType = ThemeContext;

  render() {
    return(
      <>
        <h3>Enable Theme Mode:</h3>
        <button onClick={this.context.toggleMode}>{this.context.mode}</button>
      </>
    )
  }
}

export default ThemeComponent;
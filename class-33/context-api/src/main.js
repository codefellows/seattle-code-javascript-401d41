import React from 'react';

import Content from './components/content.js';
import SiteEditor from './components/site.js';
import ThemeEditor from './components/theme.js';
import { ThemeContext } from './context/theme.js';

const styles = {
  dark: {
    background: '#000',
    color: 'white'
  },
  light: {
    background: '#ccc',
    color: 'orange'
  }
}

class Main extends React.Component {

  static contextType = ThemeContext;

  render() {
    return (
      <main style={styles[this.context.mode]}>
        <section className="content-container">
          <Content />
        </section>
        <section className="settings-container">
          <SiteEditor />
          <ThemeEditor />
        </section>
      </main>
    )
  }
}

export default Main;
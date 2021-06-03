import React from 'react';

import SettingsContext from './context/site.js'; // global (aka app state) for site settings
import ThemeContext from './context/theme.js'; // global (aka app state) for theme settings
import Main from './main.js'; // this is basically our "app" container

class App extends React.Component {
  render() {
    return (
      <ThemeContext>
        <SettingsContext>
          <Main />
        </SettingsContext>
      </ThemeContext>
    )
  }
}

export default App;

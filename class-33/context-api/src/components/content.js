import React, { useContext } from 'react';
import { SettingsContext } from '../context/site.js';
import { ThemeContext } from '../context/theme.js';

function Content(props) {
  const siteContext = useContext(SettingsContext);
  const themeContext = useContext(ThemeContext);

  return (
    <section>
      <h1>{siteContext.title}</h1>

      <div>
        <a href={`http://twitter.com/${siteContext.twitter}`}>
          @{siteContext.twitter}
        </a>
      </div>

      <h2>Current app mode: {themeContext.mode}</h2>
    </section>
  )
}

export default Content;
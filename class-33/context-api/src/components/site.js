import React, { useContext } from 'react';
import { SettingsContext } from '../context/site.js';

function Settings(props) {
  const context = useContext(SettingsContext);

  return (
    <section>
      <h3>Site Settings:</h3>

      <div>
        <input type="text" placeholder="change title" onChange={e => context.changeTitleTo(e.target.value)} />

        <input type="text" placeholder="change handle" onChange={e => context.changeTwitterTo(e.target.value)} />
      </div>
    </section>
  )
}

export default Settings;
import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [title, setTitle] = useState('Daily Dose of Code');
  const [twitter, setTwitter] = useState('DailyDoseOfCode');

  const state = {
    title,
    twitter,
    changeTitleTo: setTitle,
    changeTwitterTo: setTwitter
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
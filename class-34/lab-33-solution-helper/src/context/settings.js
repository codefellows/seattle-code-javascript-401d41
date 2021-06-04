import React from 'react';

export const SettingsContext = React.createContext();

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxVisible: 3,
      showCompleted: true,
    };
  }

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default Settings;

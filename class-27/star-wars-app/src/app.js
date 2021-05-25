import React from 'react';
import Form from './form.js';
import People from './people.js';

import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this is referred to as global state -> all child components can access this, if passed down correctly
    this.state = {
      loading: false,
      count: 0,
      results: []      
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleForm = (count, results) => {
    this.setState({ count, results });
  }

  render() {
    return (
      <>
        <Form prompt="click for sw" toggleLoading={this.toggleLoading} handler={this.handleForm} />
        <People people={this.state.results} />
      </>
    )
  }
}

export default App;
import React from 'react';
import './style.scss';

const Header = () => {
  return (
    <header>
      <h1>Cool App</h1>
      <nav>
        <ul>
          <li>nav item 1</li>
          <li>nav item 2</li>
        </ul>
      </nav>
    </header>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>cool footer!</p>
    </footer>
  )
}

class Reverser extends React.Component {
  constructor(props) {
    super(props); // for now, just do this
    this.state = {
      words: 'nothing to see yet'
    }
  }

  handleChange = e => {
    let words = e.target.value;
    this.setState({ words });
  }

  handleClick = e => {
    e.preventDefault();
    let words = this.state.words.split('').reverse().join('');
    this.setState({ words });
  }

  render() {
    return (
      <div>
        <h3>{this.state.words}</h3>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Click For Reverse!</button>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Reverser />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
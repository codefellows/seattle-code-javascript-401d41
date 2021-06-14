import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';

const API = 'http://localhost:3000';
const APP_SECRET = process.env.APP_SECRET || 'coolsecret';

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      user: {},
      login: this.login,
      logout: this.logout
    }
  }

  login = (username, password) => {
    superagent.post(`${API}/signin`)
      .set('Authorization', `Basic ${btoa(`${username}:${password}`)}`)
      .then(response => {
        console.log('API response', JSON.parse(response.text));
        return JSON.parse(response.text).token;
      })
      .then(token => this.validateToken(token));
  }

  logout = () => {
    this.setLoginState(false, null, {});
  }

  validateToken = (token) => {
    let user = jwt.verify(token, APP_SECRET);
    this.setLoginState(true, token, user)
  }

  // helper method for when we login and also when log out (on logout just set everything to null / false )
  setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    this.setState({ token, loggedIn, user })
  }

  componentDidMount() {
    const cookieToken = cookie.load('auth');
    const checkToken = cookieToken || null;

    if (checkToken) this.validateToken(checkToken);
  }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}

export default LoginProvider;
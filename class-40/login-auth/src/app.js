import React from 'react';
import Login from './components/auth/login.js';
import LoginContext from './components/auth/context.js';
import Auth from './components/auth/auth.js';

const Editor = props => {
  return (
    <Auth capability="update">
      <span>here are the things you can do since you are an editor</span>
    </Auth>
  )
}

const Admin = props => {
  return (
    <Auth capability="delete">
      <span>you are an admin, you can delete anything you see in here</span>
    </Auth>
  )
}


function App() {
  return (
    <>
      <LoginContext>
        <Login />
        <Admin />
        <Editor />
      </LoginContext>
    </>
  )
}

export default App;
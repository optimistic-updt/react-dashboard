import React from 'react';
import './Header.css'


import Login from './login'
import ToggleTheme from '../Toggle'
import Nav from './Nav'




function HeaderMain(props) {
  return (
    <header className="main-header">
      <img src="../logo192.png" alt="logo" className="logo"/>
      
      <Nav />

      <ToggleTheme theme={props.theme} toggleTheme={props.toggleTheme}/>
      <Login />
    </header>
  )
}

export default HeaderMain
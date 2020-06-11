import React from 'react';
import Login from './login'
// import NavCategory from './NavCategory'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import Nav from './Nav'




function HeaderMain() {
  return (
    <header className="main-header section group">
      <img src="../logo192.png" alt="logo" className="logo"/>
      
      <Nav />

      <ToggleSwitch />

      <Login />
    
    </header>
  )
}

export default HeaderMain
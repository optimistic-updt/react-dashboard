import React from 'react';
import Login from './login'
import NavCategory from './NavCategory'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';





function HeaderMain() {
  return (
    <header className="main-header section group">
    <img src="../logo192.png" alt="logo" className="logo"/>
    
    <nav className="nav">
      <a href="#">Overview</a>
      <NavCategory name="Calendar" menuItems={['month', 'week', 'day']} />

      <NavCategory name="Finance" menuItems={['test', 'test', 'test', 'test', 'test']} /> 

      <NavCategory name="Fitness" menuItems={['overview', 'running', 'gym', 'golf', 'test']} />
    </nav>


    <ToggleSwitch />

    <Login />
  
  </header>
  )
}

export default HeaderMain
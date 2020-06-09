import React from 'react';
import Login from './login'


function NavCategory(props) {
  return(
    <a href="#">{props.name}</a>
    
  )
}




function Header_main() {
  return (
    <header className="main-header section group">
    <img src="../logo192.png" alt="logo" className="logo"/>
    
    <nav className="nav">
      <a href="#">Overview</a>
      <NavCategory name="Calendar" menuItems={['month', 'week', 'day']} />
      <NavCategory name="Finance" menuItems={['test', 'test', 'test', 'test', 'test']} /> 
      <NavCategory name="Fitness" menuItems={['overview', 'running', 'gym', 'golf', 'test']} />
    </nav>

    <label className="switch">
      <input type="checkbox" name="" id="" />
      <span className="slider"></span>
    </label>

    {/* <Login /> */}
    <a href="#">John Smith  ^ </a>
      <button>Sign out</button>
    {/* <button className="button button-user">User</button> */}
  </header>
  )
}

export default Header_main
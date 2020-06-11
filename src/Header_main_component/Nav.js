import React from 'react'
import './NavCategory.css'

import NavCategory from './NavCategory'

function Nav() {

  return(
    <nav className="nav">
      <a href="/">Overview</a>
      <NavCategory 
        name="Calendar"
        key="1" 
        menuItems={['month', 'week', 'day']}
      />

      <NavCategory 
        name="Finance"
        key="2" 
        menuItems={['test', 'test', 'test', 'test', 'test']}
      /> 

      <NavCategory 
        name="Fitness" 
        key="3"
        menuItems={['overview', 'running', 'gym', 'golf', 'test']}
      />
    </nav>
  )
}

export default Nav
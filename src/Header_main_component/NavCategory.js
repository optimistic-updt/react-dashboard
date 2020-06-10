import React from 'react'
import './NavCategory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'


function NavCategory(props) {

  return(
    <div className="nav--category">
      <button className="nav--category-title">
        {props.name}
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <div className="nav--category-dropdown">
        {props.menuItems.map((item,idx) => (
          <a href="#" key={idx} className="nav--category-dropdown-item">{item}</a>
        ))}
      </div>
    </div>
  )
}

export default NavCategory
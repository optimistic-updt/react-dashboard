import React, { Component } from 'react'
import onClickOutside from "react-onclickoutside"
import './NavCategory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'



class NavCategory extends React.Component {

  state = {
    isOpen: false
  }

  toggleOnClick = () => {
    let { isOpen } = this.state

    if (isOpen) {
      this.setState({
        isOpen: false
      })

    } else {
      this.setState({
        isOpen: true
      })
    }
  }

  handleClickOutside = () => {
    this.setState({
      isOpen: false
    })
  }


  render() {
    let { isOpen } = this.state

    return(
      <div className="nav--category">
        <button 
          className="nav--category-title"
          onClick={this.toggleOnClick}>
          {this.props.name}
          <FontAwesomeIcon icon={faAngleDown} rotation={isOpen ? 180 : 0} className="arrow"/>
        </button>

        <div 
          className={ isOpen 
            ? "nav--category-dropdown display" 
            : "nav--category-dropdown"} 
          >

          {this.props.menuItems.map((item,idx) => (
            <a 
              href="#" 
              key={idx} 
              className="nav--category-dropdown-item"
              onClick={this.toggleOnClick}
              >{item}
            </a>
          ))}
        </div>
      </div>
    )
  }
}

export default onClickOutside(NavCategory)
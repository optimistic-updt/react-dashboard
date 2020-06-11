import React from 'react'
import './Login.css'
import onClickOutside from "react-onclickoutside"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


class Login extends React.Component {

  state = {
    isOpen: false,
    isLoggedIn: true
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

  toggleLoginIn = (e) => {
    let { isLoggedIn } = this.state
    e.preventDefault()

    if (isLoggedIn) {
      this.setState({ 
        isLoggedIn: false,
        isOpen: false
      })
    } else {
      this.setState({ 
        isLoggedIn: true,
        isOpen: false
      })
    }
  }

  handleClickOutside = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    let { isOpen, isLoggedIn } = this.state

    return(
      <div className="login">
        <button href="#" className="login--username" onClick={this.toggleOnClick}>
          { isLoggedIn ? "John Smith" : "Welcome Stranger..."}
          <FontAwesomeIcon icon={faAngleDown} rotation={ isOpen ? 180 : 0} className="arrow"/>
        </button>

        <div 
          className= { isOpen 
            ? "login--dropdown display"
            : "login--dropdown"
            }
          >
          <a href="/" className="login--dropdown-item" onClick={this.toggleLoginIn}>
            { isLoggedIn ? "Sign out" : "Sign In"}
          </a>
        </div>
      </div>
    )
  }
}

export default onClickOutside(Login)





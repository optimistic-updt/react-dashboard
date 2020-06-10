import React from 'react'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'


function Login() {
  return(
    <div className="login">
      <button href="#" className="login--username">
        John Smith
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <div className="login--dropdown">
        <a href="#" className="login--dropdown-item">Sign out</a>
      </div>
    </div>
  )
}

export default Login





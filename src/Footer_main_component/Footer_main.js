import React from 'react'
import './FooterMain.css'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function FooterMain() {
  return(
    <footer className="main-footer">
      <p>Built on React</p>
      <p>&copy; Kevin Garcia Fernandez</p>
      <div className="socials">
        <a href="https://github.com/CumulusGround"><FontAwesomeIcon icon={faGithubSquare} size="3x" /></a>
        <a href="https://www.linkedin.com/in/kevgarciaf/"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
      </div>
    </footer>
  )
}

export default FooterMain


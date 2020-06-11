import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'


const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  ${'' /* margin: 0 auto; */}
  padding: 0.5rem;
  position: relative;
  width: 4rem;
  height: 2rem;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  svg {    
    transition: all ease .3s;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
      color: #ff0;
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
      color: white;
    }
  }
`;



const ToggleTheme = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light'
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <FontAwesomeIcon icon={faSun} className="icon"/>
      <FontAwesomeIcon icon={faMoon} />
    </ToggleContainer>
  )
}

ToggleTheme.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

export default ToggleTheme
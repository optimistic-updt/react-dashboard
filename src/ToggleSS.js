import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'


const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  width: 4rem;
  height: 2rem;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  ${'' /* overflow: hidden; */}

  svg {    
    transition: all ease .3s;
${'' /* 
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(100px)'};
      color: #ff0;
    } */}
  }
`;



const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light'
  const style = {
    backgroundColor: 'red',
    heigh: '1.5rem',
    width: '1.5rem'
  }

  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <FontAwesomeIcon icon={faCircle} />
    </ToggleContainer>
  )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

export default Toggle
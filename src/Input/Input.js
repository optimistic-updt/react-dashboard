import React from 'react'
import './Input.css'

function Input(props) {
  return(
    <input type="text" placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
  )
}

export default Input
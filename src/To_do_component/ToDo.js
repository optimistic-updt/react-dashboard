import React from 'react'
import './ToDo.css'

import Input from '../Input/Input'

class ToDo extends React.Component {

  state = {
    listContent: [],
    inputValue: '',
  }


  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }


  handleAdd = (e) => {
    let { listContent, inputValue } = this.state
    e.preventDefault()
    this.setState({
      listContent: [...listContent, inputValue],
      inputValue: ''
    })
  }

  handleRemove = (e) => {
    console.log(e.target);
    let { listContent } = this.state
    let newList = listContent.filter(item => item !== e.target.key)
    this.setState({
      listContent: newList
    })
  }

  render() {
    let { listContent } = this.state
    let displayedList = listContent.map((item, idx) => (
      <li key={idx} className="list-item" onClick={this.handleRemove}>{item}</li>
    ))


    return(
      <section className="widget to-do">
        <section className="to-do--grid-square grid-square-a">
          <h6>What are you looking to achieve today ?</h6>
          <ul>
            {displayedList}
          </ul>
        </section>
      
  
        <form className="input-flex">
          <Input placeholder="Something to add?" value={this.state.inputValue} onChange={this.handleChange}/>
          <button onClick={this.handleAdd}>Add</button>
        </form>
  
      </section>
    )
  }
}

export default ToDo
import React from 'react'
import './ToDo.css'

import Input from '../Input/Input'

class ToDo extends React.Component {

  state = {
    listContent: [],
    inputValue: '',
  }

  componentDidMount() {
    if (localStorage.getItem('toDoList')) {
      const savedToDoList = localStorage.getItem('toDoList')
      const parsedToDoList = savedToDoList.split(",")
      this.setState({ listContent: parsedToDoList })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('toDoList', this.state.listContent)
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
    let { listContent } = this.state
    // let isConfirm = confirm("Are you sure?");
    
    // if (isConfirm) {
      const newList = listContent.filter(item => item !== e.target.textContent)
      this.setState({listContent: newList})
    // }
  }

  handleClear = (e) => {
    e.preventDefault()
    // localStorage.removeItem('toDoList')
    this.setState({ listContent: [] })
  }


  render() {
    let { listContent } = this.state
    let displayedList = listContent.map((item, idx) => (
      <li 
        key={idx} 
        className="list-item" 
        onClick={this.handleRemove}
      >{item}</li>
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
          <div className="to-do-buttons">
            <button onClick={this.handleAdd}>Add</button>
            <button onClick={this.handleClear}>Clear List</button>
          </div>
        </form>
  
      </section>
    )
  }
}

export default ToDo
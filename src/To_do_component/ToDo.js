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
      <p key={idx} className="list-item" onClick={this.handleRemove}>{item}</p>
    ))


    return(
      <section className="widget to-do">
        <div className="to-do--grid">
          <section className="to-do--grid-square grid-square-a">
            <h6>To Do List</h6>
            <output>
              {displayedList}
            </output>
          {/* </section>
          <section className="to-do--grid-square grid-square-b">
            <h6>B</h6>
            <output>asaf</output>
          </section>
          <section className="to-do--grid-square grid-square-c">
            <h6>C</h6>
            <output>asaf</output>
          </section>
          <section className="to-do--grid-square grid-square-d">
            <h6>D</h6>
            <output>asaf</output> */}
          </section>
        </div>
  
        <form className="input-flex">
          <Input placeholder="Something to add?" value={this.state.inputValue} onChange={this.handleChange}/>
          <button onClick={this.handleAdd}>Add</button>
        </form>
  
      </section>
    )
  }
}

export default ToDo
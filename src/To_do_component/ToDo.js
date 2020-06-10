import React from 'react'
import './ToDo.css'

import Input from '../Input/Input'

function ToDo() {
  return(
    <section className="widget to-do">
      <div className="to-do--grid">
        <section className="to-do--grid-square grid-square-a">
          <h6>A</h6>
          <output>asaf</output>
        </section>
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
          <output>asaf</output>
        </section>
      </div>

      <div className="input-flex">
        <Input placeholder="Something to add?"/>
        <button>Add</button>
      </div>

    </section>
  )
}

export default ToDo
import React from 'react'
import './NavCategory.css'

import NavCategory from './NavCategory'

class Nav extends React.Component {

  // state = {
  //   // isOpen: false,
  //   panOpen: null
  // }

  // toggleOnclick = (e) => {
  //   let panOpen = this.props.panOpen

  //   // e.target.className.add("display")

  //   if (panOpen == this.props.key) {
  //     this.setState({
  //       panOpen: null
  //     })

  //   } else {
  //     this.setState({
  //       panOpen: this.props.key
  //     })
  //     // e.target.className += " display"
  //   }
  // }

  render() {
    // let { panOpen } = this.state

    return(
      <nav className="nav">
        <a href="#">Overview</a>
        <NavCategory 
          name="Calendar"
          key="1" 
          menuItems={['month', 'week', 'day']}
          // panOpen={panOpen}
          // toggleOnclick={this.toggleOnclick} 
          />

        <NavCategory 
        name="Finance"
        key="2" 
        menuItems={['test', 'test', 'test', 'test', 'test']}
        // panOpen={panOpen}
        // toggleOnclick={this.toggleOnclick} 
         /> 

        <NavCategory 
        name="Fitness" 
        key="3"
        menuItems={['overview', 'running', 'gym', 'golf', 'test']}
        // panOpen={panOpen}
        // toggleOnclick={this.toggleOnclick}  
        />
      </nav>
    )
  }
}

export default Nav
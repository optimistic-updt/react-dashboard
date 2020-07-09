import React from 'react'

class Chart extends React.Component {
  state = {
    isHidden: false
  }

  toggleView = () => {
    this.setState({
      isHidden: this.state.isHidden ? false : true
    })
  }

  render() {
    let style = { 
      display: this.state.isHidden ? 'none' : 'inline',
      width: '100%' 
    }

    return (
      <div className="widget chart">
      <img src="https://docs.moodle.org/dev/images_dev/c/c5/bar_chart.png" alt="chart" style={style} />
      <button onClick={this.toggleView}>Hide</button>
    </div>
    )
  }
}

export default Chart
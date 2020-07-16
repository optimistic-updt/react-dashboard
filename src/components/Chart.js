import React, { Component } from 'react'
import './Chart.css'

import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, Crosshair} from 'react-vis';


class ChartWidget extends React.Component {

  state = {
    crosshairValues: []
  }

  render() {
    const DATA = [
      [
        {x: "jan", y: 500},
        {x: "feb", y: 720},
        {x: "march", y: 750},
        {x: "april", y: 830},
        {x: "may", y: 890},
        {x: "june", y: 790},
        {x: "july", y: 870},
        {x: "aug", y: 999},
        {x: "sept", y: 1200},
        {x: "oct", y: 1280}
      ],
      [
        {x: "jan", y: 500},
        {x: "feb", y: 600},
        {x: "march", y: 710},
        {x: "april", y: 790},
        {x: "may", y: 850},
        {x: "june", y: 850},
        {x: "july", y: 870},
        {x: "aug", y: 950},
        {x: "sept", y: 1050},
        {x: "oct", y: 1100},
      ],
    ]
    
    return (
      <div className="widget chart">
        <div className="graph-positioning">
          <XYPlot 
            height={400} 
            width={600} 
            xType={ 'ordinal' }
            onMouseLeave={() => this.setState({crosshairValues: []})}  
          >
            <XAxis />
            <YAxis />
            <LineSeries 
              data={DATA[0]}
              onNearestX={(value, {index}) =>
                this.setState({crosshairValues: DATA.map(d => d[index])})
              }   
              />
            <LineSeries data={DATA[1]} color="red" />
            <Crosshair values={this.state.crosshairValues}/>
          </XYPlot>
        </div>
      </div>
    )
  }
}

export default ChartWidget
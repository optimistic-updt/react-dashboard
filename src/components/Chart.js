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
        {x: "jan", y: 5000},
        {x: "feb", y: 7200},
        {x: "march", y: 7500},
        {x: "april", y: 8300},
        {x: "may", y: 8900},
        {x: "june", y: 7900},
        {x: "july", y: 8700},
        {x: "aug", y: 9999},
        {x: "sept", y: 12000},
        {x: "oct", y: 12800}
      ],
      [
        {x: "jan", y: 5000},
        {x: "feb", y: 6000},
        {x: "march", y: 7100},
        {x: "april", y: 7900},
        {x: "may", y: 8500},
        {x: "june", y: 8500},
        {x: "july", y: 8700},
        {x: "aug", y: 9500},
        {x: "sept", y: 10500},
        {x: "oct", y: 11000},
      ],
    ]
    
    return (
      <div className="widget chart">
        <div className="graph-positioning">
          <XYPlot 
            height={400} 
            width={720} 
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
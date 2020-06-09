import React from 'react'
import reverseGeoCoding from './reverseGeo'

class Weather extends React.Component {

  state = {
    temperature: 0
  }


  getLocation = () => {
    function extractLocation(position) {
      let { latitude , longitude } = position.coords
      console.log(`lat ${latitude} & long ${longitude}`);
      return `${latitude}%2C+${longitude}`
    }
  
    function locNotSupported() {
      console.log("Unable to retrieve location information");
    }

    if (navigator.geolocation) {
      console.log("Finding you in the world...");
      navigator.geolocation.getCurrentPosition(extractLocation, locNotSupported);
    } else { 
      console.log("location not supported by browser");
    }
  }


  componentDidMount() {
    // let coords = this.getLocation()
    //fetch Temperature for melbourne
    this.setState({
      // temperature: getTemperature
    })
  }


  render() {
    
    return(
      <section className="widget section--weather">
        <h4>Melbourne, Australia</h4>
        <span>icon</span>
        <span>{this.state.temperature}ºC</span>
        <label className="switch">
          <input type="checkbox" name="" id="" />
          <span className="slider"></span>
        </label>
      </section>
    )
  }
}

export default Weather
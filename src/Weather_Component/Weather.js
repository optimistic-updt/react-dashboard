import React from 'react'
import './Weather.css'
// import reverseGeoCoding from './reverseGeo'
import getTemperature from './getTemp'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'





class Weather extends React.Component {

  state = {
    temperatureInC: 0
  }


  getLocationAndSetTemperature = () => {

    function extractLocation(position) {
      let { latitude , longitude } = position.coords
      console.log(`lat ${latitude} & long ${longitude}`);

      let coordinates = `${latitude}%2C+${longitude}`

      // fetch Temperature for melbourne
      getTemperature().then(res => {
        console.log(res.data);
        this.setState({
          temperature: res.data
        })
      })
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
    this.getLocationAndSetTemperature()
  }


  render() {
    return(
      <section className="weather widget section--weather">
        <h4>Melbourne, Australia</h4>
        <p>
          <span>icon</span>
          <span className="temperature">{this.state.temperature}ºC</span>
        </p>
        <ToggleSwitch className="toggle-switch"/>
      </section>
    )
  }
}

export default Weather
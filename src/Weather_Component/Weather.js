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
        console.log(res);
        // this.setState({
        //   // temperature: getTemperature
        // })
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
        <span>icon</span>
        <span>{this.state.temperature}ºC</span>
        {/* <label className="switch">
          <input type="checkbox" name="" id="" />
          <span className="slider"></span>
        </label> */}
        <ToggleSwitch />
      </section>
    )
  }
}

export default Weather
import React from 'react'
import './Weather.css'
// import reverseGeoCoding from './reverseGeo'
import getTemperature from './getTemp'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import Toggle from '../ToggleSS'





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
      // getTemperature().then(res => {
      //   console.log(res.data);
      //   this.setState({
      //     temperature: res.data
      //   })
      // })
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
        <div className="grid-wrapper">
          <ion-icon name="sunny"></ion-icon>

          <div className="right-side">
            <p className="temperature">{this.state.temperature}24ºC</p>
            <Toggle />
          </div>
        </div>
      </section>
    )
  }
}

export default Weather

{/* <ion-icon name="partly-sunny"></ion-icon> */}
{/* <ion-icon name="partly-sunny"></ion-icon> */}
{/* <ion-icon name="cloudy-night"></ion-icon> */}
{/* <ion-icon name="thunderstorm"></ion-icon> */}
{/* <ion-icon name="rainy"></ion-icon> */}
import React from 'react'
import './Weather.css'

import Toggle from '../ToggleSS'





class Weather extends React.Component {

  state = {
    temperatureInC: 10
  }


  getLocationAndSetTemperature = () => {

    function extractLocation(position) {
      let { latitude , longitude } = position.coords
      console.log(`lat ${latitude} & long ${longitude}`);

      let coordinates = `${latitude}, ${longitude}`
      let city = "" 

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
            <p className="temperature">{this.state.temperatureInC + "ºC"}</p>
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
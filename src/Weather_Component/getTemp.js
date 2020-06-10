const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();


async function getTemperature(geoCoding = '-37.8136,144.9631') {

  const key =  process.env.DARKSKY_API
  const URL = 'https://api.darksky.net/forecast/'
  const baseURL = `${URL}${key}/${geoCoding}/?`
  const params = {
    "units": "si"
  }
  
  let result = await axios({baseURL, params})

  return `${result.data.currently.temperature} \xb0C`
}

// getTemperature()

module.exports = getTemperature

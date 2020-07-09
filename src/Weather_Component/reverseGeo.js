const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();


async function reverseGeoCoding(coordinates) {
  let baseURL = `https://api.opencagedata.com/geocode/v1/json?`
  let params = {
    "q": coordinates,
    "key": process.env.OPENCAGE_API,
  }
  // let headers = {'X-RateLimit-Remaining'}

  let results = await axios({baseURL, params})
  
  console.log(results.data.results.components);
  return results.data.results.components
}

module.exports = reverseGeoCoding
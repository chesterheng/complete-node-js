const request = require('postman-request');

const geocode = (address, callback) => {  
  const accessToken = process.env.MAPBOX_ACCESS_TOKEN
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${accessToken}`

  request({ url, json: true }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      callback('Unable to connect to location services!', undefined)
    }
    else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined)
    }
    else {
      const latitude = body.features[0].center[1]
      const longitude = body.features[0].center[0]
      const location = body.features[0].place_name
      callback(undefined, { 
        latitude, 
        longitude,
        location
      })
    }
  }) 
}

module.exports = geocode
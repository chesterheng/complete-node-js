require('dotenv').config()
const request = require('request')

const accessKey = process.env.WEATHER_STACK_ACCESS_KEY
const country = "Singapore"
const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${country}`

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!')
  } else if (response.body.error) {
    console.log('Unable to find location')
  } else {
    console.log(`${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degress out. There is a ${response.body.current.precip * 100}% chance of rain.`)
  }
})

// Geocoding
// Address -> Lat/Long -> Weather

const accessToken = process.env.MAPBOX_ACCESS_TOKEN
const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${country}.json?access_token=${accessToken}`

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error){
    console.log('Unable to connect to location services!')
  }
  else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try another search.')
  }
  else {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
  }
}) 
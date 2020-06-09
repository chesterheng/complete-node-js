require('dotenv').config()
const request = require('request')

const country = "Singapore"
const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=${country}`

request({ url: url, json: true }, (error, response) => {
  console.log(`${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degress out. There is a ${response.body.current.precip * 100}% chance of rain.`)
})
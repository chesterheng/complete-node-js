require('dotenv').config()
const request = require('request')

const country = "Singapore"
const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=${country}`

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current)
})
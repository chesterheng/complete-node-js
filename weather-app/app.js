require('dotenv').config()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Singapore', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

forecast(1.3, 103.8, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

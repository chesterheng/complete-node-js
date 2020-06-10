require('dotenv').config()
const http = require('http')

const accessKey = process.env.WEATHER_STACK_ACCESS_KEY
const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=1.3,103.8`

const request = http.request(url, (response) => {
  let data = ''

  response.on('data', chunk => {
      data = data + chunk.toString()
  })

  response.on('end', () => {
      const body = JSON.parse(data)
      console.log(body)
  })

})

request.on('error', (error) => {
  console.log('An error', error)
})

request.end()
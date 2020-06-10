const express = require('express')
const path = require('path')

const app = express()

console.log(__dirname)
console.log(__filename)
const publicDirectoryPath = path.join(__dirname, '../public')
console.log(publicDirectoryPath)

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Andrew Mead'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Andrew Mead'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.'
  })
})

app.get('/weather', (req, res) => res.send({
  forecast: 'It is sunny',
  location: 'Singapore'
}))

app.listen(3000, () => console.log('Server is up on port 3000.'))
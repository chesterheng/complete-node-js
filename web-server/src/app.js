const express = require('express')
const path = require('path')

const app = express()

console.log(__dirname)
console.log(__filename)
const publicDirectoryPath = path.join(__dirname, '../public')
console.log(publicDirectoryPath)

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => res.send({
  forecast: 'It is sunny',
  location: 'Singapore'
}))

app.listen(3000, () => console.log('Server is up on port 3000.'))
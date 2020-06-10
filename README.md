# The Complete Guide to Advanced React Component Patterns

## Table of Contents

- [The Complete Guide to Advanced React Component Patterns](#the-complete-guide-to-advanced-react-component-patterns)
  - [Table of Contents](#table-of-contents)
  - [**Section 1: Welcome**](#section-1-welcome)
  - [**Section 2: Installing and Exploring Node.js**](#section-2-installing-and-exploring-nodejs)
  - [**Section 3: Node.js Module System (Notes App)**](#section-3-nodejs-module-system-notes-app)
    - [Importing Node.js Core Modules](#importing-nodejs-core-modules)
    - [Importing Your Own Files](#importing-your-own-files)
    - [Importing npm Modules](#importing-npm-modules)
    - [Printing in Color](#printing-in-color)
    - [Global npm Modules and nodemon](#global-npm-modules-and-nodemon)
  - [**Section 4: File System and Command Line Args (Notes App)**](#section-4-file-system-and-command-line-args-notes-app)
    - [Getting Input from Users](#getting-input-from-users)
    - [Argument Parsing with Yargs](#argument-parsing-with-yargs)
    - [Storing Data with JSON](#storing-data-with-json)
    - [Adding a Note](#adding-a-note)
    - [Removing a Note](#removing-a-note)
    - [ES6 Aside: Arrow Functions](#es6-aside-arrow-functions)
    - [Refactoring to Use Arrow Functions](#refactoring-to-use-arrow-functions)
    - [Reading a Note](#reading-a-note)
  - [**Section 5: Debugging Node.js (Notes Apps)**](#section-5-debugging-nodejs-notes-apps)
    - [Debugging Node.js](#debugging-nodejs)
  - [**Section 6: Asynchronous Node.js (Weather App)**](#section-6-asynchronous-nodejs-weather-app)
    - [Asynchronous Basics](#asynchronous-basics)
    - [Call Stack, Callback Queue, and Event Loop](#call-stack-callback-queue-and-event-loop)
    - [Making HTTP Requests](#making-http-requests)
    - [Customizing HTTP Requests](#customizing-http-requests)
    - [An HTTP Request](#an-http-request)
    - [Handling Errors](#handling-errors)
    - [The Callback Function](#the-callback-function)
    - [Callback Abstraction](#callback-abstraction)
    - [Callback Chaining](#callback-chaining)
    - [HTTP Requests Without a Library](#http-requests-without-a-library)
  - [**Section 7: Web Servers (Weather App)**](#section-7-web-servers-weather-app)
    - [Hello Express](#hello-express)
    - [Serving up HTML and JSON](#serving-up-html-and-json)
    - [Serving up Static Assets](#serving-up-static-assets)
  - [**Section 8: Accessing API from Browser (Weather App)**](#section-8-accessing-api-from-browser-weather-app)
  - [**Section 9: Application Deployment (Weather App)**](#section-9-application-deployment-weather-app)
  - [**Section 10: MongoDB and Promises (Task App)**](#section-10-mongodb-and-promises-task-app)
  - [**Section 11: REST APIs and Mongoose (Task App)**](#section-11-rest-apis-and-mongoose-task-app)
  - [**Section 12: API Authentication and Security (Task App)**](#section-12-api-authentication-and-security-task-app)
  - [**Section 13: Sorting, Pagination, and Filtering (Task App)**](#section-13-sorting-pagination-and-filtering-task-app)
  - [**Section 14: File Uploads (Task App)**](#section-14-file-uploads-task-app)
  - [**Section 15: Sending Emails (Task App)**](#section-15-sending-emails-task-app)
  - [**Section 16: Testing Node.js (Task App)**](#section-16-testing-nodejs-task-app)
  - [**Section 17: Real-Time Web Applications with Socket.io (Chat App)**](#section-17-real-time-web-applications-with-socketio-chat-app)
  - [**Section 18: Wrapping Up**](#section-18-wrapping-up)

## **Section 1: Welcome**

- [Complete NodeJS](complete-node-js.pdf)
- [Source Code](https://github.com/andrewjmead/node-course-v3-code)

**[⬆ back to top](#table-of-contents)**

## **Section 2: Installing and Exploring Node.js**

**[⬆ back to top](#table-of-contents)**

## **Section 3: Node.js Module System (Notes App)**

### Importing Node.js Core Modules

```javascript
const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Chester.')
fs.appendFileSync('notes.txt', ' I live in Singapore.')
```

```console
node app.js
```

**[⬆ back to top](#table-of-contents)**

### Importing Your Own Files

[Introduction to CommonJS](https://flaviocopes.com/commonjs/)

```javascript
const getNotes = () => 'Your notes...'

module.exports = getNotes 
```

```javascript
const getNotes = require('./notes.js')
const msg = getNotes()
```

**[⬆ back to top](#table-of-contents)**

### Importing npm Modules

```console
npm init -y
npm i validator
```

```javascript
const validator = require('validator')
console.log(validator.isURL('https://mead.io/')) 
```

**[⬆ back to top](#table-of-contents)**

### Printing in Color

```console
npm i chalk
```

```javascript
const chalk = require('chalk')
const greenMsg = chalk.green.inverse.bold('Success!')
```

**[⬆ back to top](#table-of-contents)**

### Global npm Modules and nodemon

```console
npm i -g nodemon
nodemon app.js
```

**[⬆ back to top](#table-of-contents)**

## **Section 4: File System and Command Line Args (Notes App)**

### Getting Input from Users

```javascript
const command = process.argv[2]

if (command === 'add') {
  console.log('Adding note!')
} else if (command === 'remove') {
  console.log('Removing note!')
}
```

```console
node app.js add
```

**[⬆ back to top](#table-of-contents)**

### Argument Parsing with Yargs

```javascript
const yargs = require('yargs')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log('Title: ' + argv.title)
    console.log('Body: ' + argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
      console.log('Removing the note')
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
      console.log('Listing out all notes')
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
      console.log('Reading a note')
  }
})

module.exports = yargs 
```

```javascript
const yargs = require('./yargs')
console.log(yargs.argv)
yargs.parse()
```

```console
node app.js add
node app.js remove
node app.js list
node app.js read
node app.js add --title="My Note" --body="Interesting Lesson"
```

**[⬆ back to top](#table-of-contents)**

### Storing Data with JSON

```javascript
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
const parseData = JSON.parse(bookJSON)
```

```json
{
  "title": "Ego is the Enemy",
  "author": "Ryan Holiday"
}
```

```javascript
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const user = JSON.parse(dataJSON)

const user = require('./1-json.json')
user.name = 'Gunther'
user.age = 54

const userJSON = JSON.stringify(user, false, 2)
fs.writeFileSync('1-json.json', userJSON)
```

```json
{
  "title": "Ego is the Enemy",
  "author": "Ryan Holiday",
  "name": "Gunther",
  "age": 54
}
```

### Adding a Note

```javascript
// app.js
const yargs = require('yargs')
const notes = require('./notes.js')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note')
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
    console.log('Listing out all notes')
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading a note')
  }
})

console.log(yargs.argv)
yargs.parse()
```

```javascript
// notes.js
const fs = require('fs')
const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(note => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log('New note added!')
  } else {
    console.log('Note title taken!')
  }
}

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes, false, 2)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    return require('./notes.json')
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote
}
```

```console
node app.js add --title="Frontend 1" --body="React"
node app.js add --title="Frontend 2" --body="Vue"
node app.js add --title="Frontend 3" --body="Angular"
```

**[⬆ back to top](#table-of-contents)**

### Removing a Note

```javascript
// notes.js
const chalk = require('chalk')
...
const removeNote = title => {
  const notes = loadNotes()
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title
  })

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }    
}

module.exports = {
  getNotes,
  addNote,
  removeNote
}
```

```javascript
// app.js
const yargs = require('yargs')
const notes = require('./notes.js')
...
// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title)
  }
})

yargs.parse()
```

```console
node app.js add --title="Frontend 1" --body="React"
node app.js add --title="Frontend 2" --body="Vue"
node app.js add --title="Frontend 3" --body="Angular"
node app.js remove --title="Frontend 3"
```

**[⬆ back to top](#table-of-contents)**

### ES6 Aside: Arrow Functions

```javascript
const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  printGuestList() {
    console.log('Guest list for ' + this.name)
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })
  }
}
```

```javascript
//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  tasks: [{
    text: 'Grocery shopping',
    completed: true
  }, {
    text: 'Clean yard',
    completed: false
  }, {
    text: 'Film course',
    completed: false
  }],
  getTasksToDo() {
    return this.tasks.filter(task => task.completed === false)
  }
}
tasks.getTasksToDo()
```

**[⬆ back to top](#table-of-contents)**

### Refactoring to Use Arrow Functions

```javascript
// app.js
const yargs = require('yargs')
const notes = require('./notes.js')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    console.log('Listing out all notes')
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading a note')
  }
})

console.log(yargs.argv)
yargs.parse()
```

```javascript
// notes.js
const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(note => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
  } else {
    console.log(chalk.red.inverse('Note title taken!'))
  }
}

const removeNote = title => {
  const notes = loadNotes()
  const notesToKeep = notes.filter(note => note.title !== title)

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }    
}

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes, false, 2)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    return require('./notes.json')
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes,
  addNote,
  removeNote
}
```

```console
node app.js add --title="Frontend 1" --body="React"
node app.js add --title="Frontend 2" --body="Vue"
node app.js add --title="Frontend 3" --body="Angular"
node app.js remove --title="Frontend 3"
```

**[⬆ back to top](#table-of-contents)**

Listing Notes

```javascript
// notes.js
const fs = require('fs')
const chalk = require('chalk')
...
const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.inverse('Your notes'))
  notes.forEach(note => console.log(note.title))
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes
}
```

```javascript
// app.js
...
// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    notes.listNotes()
  }
})

yargs.parse()
```

```console
node app.js list
```

**[⬆ back to top](#table-of-contents)**

### Reading a Note

```javascript
// app.js
...
// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

yargs.parse()
```

```javascript
// notes.js
const readNote = title => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('Note not found!'))
  }
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
}
```

```console
node app.js read --title="Frontend 3"
```

**[⬆ back to top](#table-of-contents)**

## **Section 5: Debugging Node.js (Notes Apps)**

### Debugging Node.js

[Debugger](https://nodejs.org/api/debugger.html)

```javascript
console.log('Start debugger')
debugger
console.log('Stop debugger')
```

```console
node inspect app.js
```

Visit chrome://inspect in the Chromr browser

**[⬆ back to top](#table-of-contents)**

## **Section 6: Asynchronous Node.js (Weather App)**

- Asynchronous
- Non-blocking
- Single Threaded
- Event Driven

### Asynchronous Basics

```javascript
console.log('Starting')
setTimeout(() => console.log('2 Second Timer'), 2000)
setTimeout(() => console.log('0 Second Timer'), 0)
console.log('Stopping')
```

Starting
Stopping
0 Second Timer
2 Second Timer

**[⬆ back to top](#table-of-contents)**

### Call Stack, Callback Queue, and Event Loop

**[⬆ back to top](#table-of-contents)**

### Making HTTP Requests

- [request](https://github.com/request/request)
- [postman-request](https://github.com/postmanlabs/postman-request#readme)
- [weatherstack](https://weatherstack.com/documentation)

```javascript
require('dotenv').config()
const request = require('request')

const country = "Singapore"
const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=${country}`

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current)
})
```

**[⬆ back to top](#table-of-contents)**

### Customizing HTTP Requests

[mapbox](https://www.mapbox.com/)

```javascript
require('dotenv').config()
const request = require('request')

const accessKey = process.env.WEATHER_STACK_ACCESS_KEY
const country = "Singapore"
const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${country}`

request({ url: url, json: true }, (error, response) => {
  console.log(`${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degress out. There is a ${response.body.current.precip * 100}% chance of rain.`)
})
```

**[⬆ back to top](#table-of-contents)**

### An HTTP Request

```javascript
require('dotenv').config()
const request = require('request')

// Geocoding
// Address -> Lat/Long -> Weather
const accessToken = process.env.MAPBOX_ACCESS_TOKEN
const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${country}.json?access_token=${accessToken}`

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[0]
  const longitude = response.body.features[0].center[1]
  console.log(latitude, longitude)
}) 
```

**[⬆ back to top](#table-of-contents)**

### Handling Errors

```javascript
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
```

**[⬆ back to top](#table-of-contents)**

### The Callback Function

```javascript
setTimeout(() => console.log('Two seconds are up'), 2000)

const geocode = (address, callback) =>
  setTimeout(() => callback({ latitude: 0, longitude: 0 }), 2000)
geocode('Philadelphia', data => console.log(data))

const add = (a, b, callback) => setTimeout(() => callback(a + b), 2000)
add(1, 4, sum => console.log(sum)) 
```

**[⬆ back to top](#table-of-contents)**

### Callback Abstraction

```javascript
// app.js
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
```

```javascript
// geocode.js
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
```

```javascript
// forecast.js
const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const accessKey = process.env.WEATHER_STACK_ACCESS_KEY
  const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${latitude},${longitude}`

  request({ url, json: true }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]} It is currently ${body.current.temperature} degress out. There is a ${body.current.precip * 100}% chance of rain.`)
    }
  })
}

module.exports = forecast
```

**[⬆ back to top](#table-of-contents)**

### Callback Chaining

```javascript
require('dotenv').config()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }

      console.log(location)
      console.log(forecastData)
    })
  })
}
```

**[⬆ back to top](#table-of-contents)**


ES6 Aside: Object Property Shorthand and Destructuring

```javascript
// Object property shorthand
const name = 'Andrew'
const userAge = 27

const user = {
  name,
  age: userAge,
  location: 'Philadelphia'
}

// Object destructuring
const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

// const label = product.label
// const stock = product.stock

const { label: productLabel, stock, rating = 5 } = product

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}
transaction('order', product) 
```

**[⬆ back to top](#table-of-contents)**

### HTTP Requests Without a Library

[http.request](https://nodejs.org/api/http.html#http_http_request_url_options_callback)

```javascript
require('dotenv').config()
const http = require('http')

const accessKey = process.env.WEATHER_STACK_ACCESS_KEY
const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=1.3,103.8`

const request = http.request(url, response => {
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
```

**[⬆ back to top](#table-of-contents)**

## **Section 7: Web Servers (Weather App)**

### Hello Express

```javascript
const express = require('express')

const app = express()

app.get('', (req, res) => res.send('Hello express!'))
app.get('/help', (req, res) => res.send('Help page'))
app.get('/about', (req, res) => res.send('About'))
app.get('/weather', (req, res) => res.send('Your weather'))

app.listen(3000, () => console.log('Server is up on port 3000.'))
```

**[⬆ back to top](#table-of-contents)**

### Serving up HTML and JSON

```javascript
const express = require('express')

const app = express()

// route
app.get('', (req, res) => res.send('<h1>Weather</h1>'))
app.get('/help', (req, res) => res.send([
  { name: 'Andrew' }, { name: 'Sarah'}
]))
app.get('/about', (req, res) => res.send('<h1>About</h1>'))
app.get('/weather', (req, res) => res.send({
  forecast: 'It is sunny',
  location: 'Singapore'
}))

app.listen(3000, () => console.log('Server is up on port 3000.'))
```

Chrome Browser

- http://localhost:3000
- http://localhost:3000/help
- http://localhost:3000/about
- http://localhost:3000/weather

**[⬆ back to top](#table-of-contents)**

### Serving up Static Assets

web-server

- public
- src

```javascript
const express = require('express')
const path = require('path')

const app = express()

console.log(__dirname)
console.log(__filename)
const publicDirectoryPath = path.join(__dirname, '../public')

// html static assets
app.use(express.static(publicDirectoryPath))

// route
app.get('/weather', (req, res) => res.send({
  forecast: 'It is sunny',
  location: 'Singapore'
}))

app.listen(3000, () => console.log('Server is up on port 3000.'))
```

Chrome Browser

- http://localhost:3000
- http://localhost:3000/index.html
- http://localhost:3000/help.html
- http://localhost:3000/about.html
- http://localhost:3000/weather

**[⬆ back to top](#table-of-contents)**

## **Section 8: Accessing API from Browser (Weather App)**

**[⬆ back to top](#table-of-contents)**

## **Section 9: Application Deployment (Weather App)**

**[⬆ back to top](#table-of-contents)**

## **Section 10: MongoDB and Promises (Task App)**

**[⬆ back to top](#table-of-contents)**

## **Section 11: REST APIs and Mongoose (Task App)**

**[⬆ back to top](#table-of-contents)**

## **Section 12: API Authentication and Security (Task App)**

**[⬆ back to top](#table-of-contents)**

## **Section 13: Sorting, Pagination, and Filtering (Task App)**

**[⬆ back to top](#table-of-contents)**

## **Section 14: File Uploads (Task App)**

**[⬆ back to top](#table-of-contents)**

## **Section 15: Sending Emails (Task App)**

**[⬆ back to top](#table-of-contents)**

## **Section 16: Testing Node.js (Task App)**

**[⬆ back to top](#table-of-contents)**

## **Section 17: Real-Time Web Applications with Socket.io (Chat App)**

**[⬆ back to top](#table-of-contents)**

## **Section 18: Wrapping Up**

**[⬆ back to top](#table-of-contents)**

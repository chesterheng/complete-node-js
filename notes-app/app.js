const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Chester.')
fs.appendFileSync('notes.txt', ' I live in Singapore.')

const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg) 
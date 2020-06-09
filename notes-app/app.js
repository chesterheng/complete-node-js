const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

fs.writeFileSync('notes.txt', 'My name is Chester.')
fs.appendFileSync('notes.txt', ' I live in Singapore.')

const msg = getNotes()
console.log(msg) 

console.log(validator.isURL('https://mead.io/')) 

const greenMsg = chalk.green.inverse.bold('Success!')
console.log(greenMsg) 
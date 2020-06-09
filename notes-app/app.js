const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('./yargs')

fs.writeFileSync('notes.txt', 'My name is Chester.')
fs.appendFileSync('notes.txt', ' I live in Singapore.')

const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg) 

console.log(validator.isURL('https://mead.io/')) 

const greenMsg = chalk.blue.inverse.bold('Success!')
console.log(greenMsg) 

console.log(process.argv)
const command = process.argv[2]

if (command === 'add') {
  console.log('Adding note!')
} else if (command === 'remove') {
  console.log('Removing note!')
}

console.log(yargs.argv)
yargs.parse()
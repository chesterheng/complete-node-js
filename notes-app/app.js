const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Chester.')
fs.appendFileSync('notes.txt', ' I live in Singapore.')
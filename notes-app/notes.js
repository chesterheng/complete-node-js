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

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes, false, 2)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    // const dataBuffer = fs.readFileSync('notes.json')
    // const dataJSON = dataBuffer.toString()
    // return JSON.parse(dataJSON)
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
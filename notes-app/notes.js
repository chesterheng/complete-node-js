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
    // const dataBuffer = fs.readFileSync('notes.json')
    // const dataJSON = dataBuffer.toString()
    // return JSON.parse(dataJSON)
    return require('./notes.json')
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote
}
const socket = io()

socket.on('message', message => console.log(message))

document
  .querySelector('#message-form')
  .addEventListener('submit', event => {
    event.preventDefault()

    const message = event.target.elements.message.value
    
    socket.emit('sendMessage', message)
})
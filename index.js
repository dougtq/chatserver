const server = require('express')()
let io = require('socket.io')

let app = server.listen(process.env.PORT || 3080, () => {
  console.log('servidor rodando na porta 3080')
})

let socket = io(app)

socket.on('connection', socketServer => {
  console.log(socketServer.id)
  socketServer.on('SEND_MESSAGE', data => {
    console.log(data)
    socket.emit('RECEIVE_MESSAGE', data)
  })
})

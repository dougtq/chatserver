const server = require('express')
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log(socket.id)
})

server.listen(process.env.PORT || 3080, () => {
  console.log('servidor rodando na')
})

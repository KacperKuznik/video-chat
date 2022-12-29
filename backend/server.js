const express = require("express")
var cors = require('cors')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server,  {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})
const { v4 } = require('uuid')
const port = 3001

app.use(cors({origin: 'http://localhost:3000'}));

app.get('/create-room', (req, res) => {
    res.send(v4())
})
app.get('/:room', (req, res) => {
  res.send(req.params.room)
})
  
io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    console.log(roomId,userId)
    socket.join(roomId)
    socket.broadcast.to(roomId).emit('user-connected', userId)
  })
})

server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
  })
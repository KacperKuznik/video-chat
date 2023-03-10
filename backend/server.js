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
    console.log("user: " + userId + " joined room: " + roomId)
    socket.join(roomId)
    socket.broadcast.to(roomId).emit('user-connected', userId)
    socket.on("disconnect", ()=>{
      socket.broadcast.emit("disconnect-user", userId)
      console.log("disconnected user:", userId, "from room:", roomId)
    })
    socket.on("message", (message) =>{
      console.log("user:", userId, "sent message:", message)
      socket.broadcast.emit("broadcasted-message", message)
    })
  }
  )
})



server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
  })
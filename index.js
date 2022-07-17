const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('./front'));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });

    socket.on('chat message', (info) => {
        io.emit('chat message backend', info);
    })
  });

server.listen(port, () => {
    console.log(`app listening on port ${port}`);
})
const express = require('express');
const path = require('path');
const http = require('http')
const socketIO = require ('socket.io')
const photosRouter = require('./routers/photos');
require('./db/connection');

const PORT = process.env.PORT || 3300;

const app = express();
const server = http.createServer(app)
const io = socketIO(server)
io.on("connection", socket => {
   console.log("New client connected " + socket.id);
    socket.on("left", index => {
      console.log("left")
      console.log(index)
      io.emit("setIndex", index);
    });

    socket.on("right", index => {
      console.log("right")
      console.log(index)
      io.emit("setIndex", index);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(photosRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
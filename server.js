const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

// Connect Database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/routines", require("./routes/routines"));
app.use("/api/exercises", require("./routes/exercises"));
app.use("/api/sessions", require("./routes/sessions"));

// Chat Server
io.on("connection", (socket) => {
  console.log(`Connection : SocketId = ${socket.id}`);
  let name = "";

  socket.on("subscribe", (data) => {
    console.log("Socket: Subscribe");
    const roomData = JSON.parse(data);
    name = roomData.name;
    const roomName = roomData.roomName;

    socket.join(`${roomName}`);
    console.log(`${name} Has Joined Chat: ${roomName}`);

    io.to(`${roomName}`).emit("newUserToChatRoom", name);
  });

  socket.on("unsubscribe", (data) => {
    console.log("Socket: Unsubscribe");
    const roomData = JSON.parse(data);
    const name = roomData.name;
    const roomName = roomData.roomName;

    console.log(`${name} Has Left Chat: ${roomName}`);
    socket.broadcast.to(`${roomName}`).emit("userLeftChatRoom", name);
    socket.leave(`${roomName}`);
  });

  socket.on("newMessage", (data) => {
    console.log("New Message Sent");

    const messageData = JSON.parse(data);
    const messageContent = messageData.messageContent;
    const roomName = messageData.roomName;

    console.log(`[Room Number ${roomName}] ${name} : ${messageContent}`);
    const chatData = {
      name: name,
      messageContent: messageContent,
      roomName: roomName,
    };
    socket.broadcast
      .to(`${roomName}`)
      .emit("updateChat", JSON.stringify(chatData));
  });

  socket.on("typing", (roomNumber) => {
    console.log("User Is Typing");
    socket.broadcast.to(`${roomNumber}`).emit("typing");
  });

  socket.on("stopTyping", (roomNumber) => {
    console.log("User Has Stopped Typing");
    socket.broadcast.to(`${roomNumber}`).emit("stopTyping");
  });

  socket.on("disconnect", function () {
    console.log("User Has Disconnected From Server");
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log("Welcome To The Fitness Application API")
);

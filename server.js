import express from "express";
import connectDB from "./config/db.js";
const app = express();
import path from "path";
import http from "http";
import { Server } from "socket.io";
import colors from "colors";
import usersRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import routinesRouter from "./routes/routines.js";
import exercisesRouter from "./routes/exercises.js";
import sessionsRouter from "./routes/sessions.js";
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Connect Database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Routes
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/routines", routinesRouter);
app.use("/api/exercises", exercisesRouter);
app.use("/api/sessions", sessionsRouter);

// Chat Server
io.on("connection", (socket) => {
  console.log(`Connection : SocketId = ${socket.id}`);
  let name = "";

  socket.on("subscribe", (data) => {
    console.log("Socket: Subscribe");
    const roomData = data;
    name = roomData.name;
    const roomName = roomData.roomName;

    socket.join(`${roomName}`);
    console.log(`${name} Has Joined Chat: ${roomName}`);

    // io.to(`${roomName}`).emit("newUserToChatRoom", name);
    socket.broadcast.to(`${roomName}`).emit("newUserToChatRoom", name);
  });

  socket.on("unsubscribe", (data) => {
    console.log("Socket: Unsubscribe");
    const roomData = data;
    const name = roomData.name;
    const roomName = roomData.roomName;

    console.log(`${name} Has Left Chat: ${roomName}`);
    socket.broadcast.to(`${roomName}`).emit("userLeftChatRoom", name);
    socket.leave(`${roomName}`);
  });

  socket.on("newMessage", (data) => {
    console.log("New Message Sent");

    const messageData = data;
    const messageContent = messageData.messageContent;
    const roomName = messageData.roomName;

    console.log(`[Room Number ${roomName}] ${name} : ${messageContent}`);
    const chatData = {
      name: name,
      messageContent: messageContent,
      roomName: roomName,
    };
    io.to(`${roomName}`).emit("updateChat", chatData);
    // socket.broadcast.to(`${roomName}`).emit("updateChat", chatData);
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
  console.log("Welcome To The Fitness Application API".cyan.bold)
);

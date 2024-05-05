import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
	},
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId: socketId}

// Jab koi new user server se connect hota hai toh dono ke beech handshake hota hai
// ans connection event trigger hota hai
io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	const userId = socket.handshake.query.userId;
	if (userId != "undefined") userSocketMap[userId] = socket.id;

	// emit() function ek event ko trigger karta hai aur us event ke saath associated data ko clients tak bhejta hai
	// io.emit() is used to send events to all the connected clients
	// io.emit() ke zariye hum getOnlineUsers event ko trigger karte hain, 
	// aur saare online users ki IDs userSocketMap se lekar clients tak bhejte hain
	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	// socket.on() is used to listen to the events. can be used both on client and server side
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };

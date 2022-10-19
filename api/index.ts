import { createServer } from 'http';
import express from 'express';
const app = express();
import { Server } from 'socket.io';
// import cors from 'cors';
const port = 4040;

const httpServer = createServer();
const io = new Server(httpServer, {
	cors: { origin: 'http://localhost:3000' },
});

io.on('connection', (socket) => {
	console.log('connected');

	socket.on('send-message', (message) => {
		socket.broadcast.emit('get-message', message);
	});

	socket.on('disconnect', (reason) => {
		console.log('disconnected ', reason);
	});
});

httpServer.listen(4040, () =>
	console.log(`Server is running on port ${port}...`)
);

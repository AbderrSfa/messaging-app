import express from 'express';
const app = express();
const port = 4040;
import { Server } from 'socket.io';
import cors from 'cors';

app.use(cors());

const io = new Server();

io.on('connection', (socket) => {
	console.log(`socket ${socket.id} connected`);
	console.log(socket);

	// upon disconnection
	socket.on('disconnect', (reason) => {
		console.log(`socket ${socket.id} disconnected due to ${reason}`);
	});
});

app.listen(4040, () => console.log(`Server is listening on port ${port}...`));

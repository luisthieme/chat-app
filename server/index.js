import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        origin: process.env.NODE_ENV === 'production' ? '*' : ['http://localhost:3000', 'http://127.0.0.1:3000'],
    },
});
io.on('connection', (socket) => {
    console.log('user id: ', socket.id);
    socket.on('message', (data) => {
        console.log(data);
        io.emit('message', data);
    });
});

httpServer.listen(3500, () => console.log('listening on port 3500'));

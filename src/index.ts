import {Server, ServerOptions, Namespace} from 'socket.io';
const test = new Server();

test.on('connection', socket => {
    console.log(socket);
})

test.listen(3000);
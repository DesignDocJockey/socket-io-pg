'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
const app = express();
const server = http.createServer(app);
const webSocketServer = socketIO(server);

//middleware to serve static content from a specified folder
app.use(express.static(publicPath));

//event when connection has been received on the server-side
webSocketServer.on('connection', (socket) => {
    console.log(`Client Has Connected...`);

    socket.emit('customEventFromServerToClient', 
        { id: 1, message: "a custom event was emmited from the server to the client"});


    //server recieves an event from the client
    socket.on('customEventFromClient', (paramsFromClient) => {
        console.log(JSON.stringify(paramsFromClient, undefined, 1));
    });
        
    //when client disconnected event has been received on the server-side
    socket.on('disconnect', (socket) => {
        console.log(`Client Has Dis-Connected...`);
    });
});




server.listen(port, ()=> { console.log(`Server Up... Listening at Port: ${port}`)});


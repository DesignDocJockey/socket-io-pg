var socket = io();

//client event when it connects to the server
socket.on('connect', () => {
  console.log('Connected to the server..');

  socket.emit('eventFromClient', {
      clientId: "132432",
      text:"Hello from the client..."    
  });
});

//client event when it disconnects from the server
socket.on('disconnect', () => {
  console.log('Dis-Connected to the server..');
});

//custom event recieved from the server
socket.on('customEvent', (event) => {
  console.log('customEvent recieved from server-side....');
  console.log(JSON.stringify(event, undefined, 1));
});
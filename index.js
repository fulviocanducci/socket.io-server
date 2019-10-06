var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3001;

var data = [];

io.on('connection', (socket) => {  
  socket.on('chat message', (message) => {
    if (message !== '') {
      data = [...data, message];    
    }    
    io.emit('chat message', JSON.stringify(data));        
  });
});

http.listen(port, () => {
  console.log('listening on *:' + port);
});
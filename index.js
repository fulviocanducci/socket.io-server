var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3001;

/*
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
*/

io.on('connection', function(socket){
  console.log('[ Connect ] => Socket.io');
  console.log('-------------------------------------------------');
  socket.on('chat message', (message) => {
    console.log('[ On   ][chat message] => ' + message);
    io.emit('chat message', message);    
    console.log('[ Emit ][chat message] => ' + message);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);
var port = process.env.PORT || 5000


app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});


http.listen(port, function(){
  console.log('listening on '+ port);
});

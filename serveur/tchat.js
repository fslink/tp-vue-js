var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile((__dirname + '/index.html'))
});

io.on('connection', function(socket){
  console.log('a user connected');
   socket.on('chat message', function(msg){
    io.emit('chat message', msg, socket.pseudo)
/*    console.log(socket.pseudo + ' ' + msg)
*/  });
   socket.on('nouvelle_couillasse', function(pseudo){
   		socket.pseudo = pseudo
   })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

var Twitter = require('twitter')
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var client = new Twitter({
  consumer_key: 'ZDlB334dL0YQNjFf2JyFn9kd1',
  consumer_secret: 'NDmhOrHXwbnKjj8yBMYiDqPENl7MLbGiHXGOK4ifmpAb6JmLXV',
  access_token_key: '1049279921904910337-XmJHTqQ9cJxqW2baAApa1qKekL6uAf',
  access_token_secret: 'KNSiXWXdc63FGwicyDDfKGE4RtpgY01MtULG7mzlvmhRP'
});

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

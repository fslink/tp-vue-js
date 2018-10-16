var Twitter = require('twitter')
var app = require('express')()
var http = require('http').Server(app);
var io = require('socket.io')(http);

var client = new Twitter({
  consumer_key: 'HJxJK9Jiwxqk5V8cS7bUBRSzP',
  consumer_secret: '1e285XIgseJx0fT44p5ggbyNMrwHuGythpSOZZhApgFWFSUWxo',
  access_token_key: '4824295294-1pWrw3EMTm2a9ESgf7rxy1up0k8DbgGpTqwGZG1',
  access_token_secret: 'fhXXIL6D3iQt9JVR9bq7xqM0EBJPwomOS60mkm6e0Rp7j'
});

app.get('/', function(req, res, next){
	res.sendFile((__dirname + '/twitts.html'))
})

io.on('connection', function(socket){
	console.log('user connected')
	client.stream('statuses/filter', {track: 'javascript'}, function(stream){
		stream.on('data', function(event){
			socket.emit('twittos', event)
		})
		stream.on('error', function(error){
			throw error
		})
	})
})

http.listen(3000, function(){
  console.log('listening on *:3000')
})

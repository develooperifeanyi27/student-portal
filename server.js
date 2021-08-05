var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
app.get('/chat', (req, res) => {
        res.sendFile(__dirname + '/chat.html');
})

var server_port = process.env.PORT || 3000
http.listen(server_port)
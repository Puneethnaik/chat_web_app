var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

app.use(express.static("."))

server.listen(process.env.PORT || 8000);
console.log("Server up and running");


//routes
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

//socket.io logic
io.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log("Connected sockets : %s", connections.length)
    //whenever it connects emit the new user event to all connections
    io.sockets.emit('user connect', {userId: socket.id})
    //Disconnect
    socket.on("disconnect", function() {
        connections.splice(connections.indexOf(socket), 1);
        console.log("User disconnected Connected sockets : %s", connections.length)
        io.sockets.emit('user disconnect', {userId: socket.id});
    })

});

const express = require("express");
const app=express();
const cors = require('cors');
const http = require("http");

const server = http.createServer(app);
const io = require("socket.io")(server,{
    cors: {
        origin: "*"
    }
});
let users={};
io.on("connection",(socket) => {
    socket.on("name",(name)=>{
        
        users[socket.id]=name;
        socket.broadcast.emit("content",`${name} joined the chat.`)
    });
    socket.on("disconnect",()=>{
        socket.broadcast.emit("content",`${users[socket.id]} left the chat.`);
        delete users[socket.id];
    }); 
    socket.on("send",(message)=>{
        socket.broadcast.emit("content",`${users[socket.id]}: ${message}`);
    });
})


server.listen(5000,()=>
{
    console.log("server listening at port 5000");
})


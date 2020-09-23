const express = require('express');
const sockjs = require('sockjs');
const clients=[]
const echo = sockjs.createServer({ prefix:'/websocket' });
echo.on('connection', function(conn) {
    clients.push(conn)
    //console.log("New connection")
    //console.log(conn)
    conn.on('data', function(message) {

        clients.forEach(c=>{
            c.write(message)
        })
        console.log('message recieved')
        //console.log(message)

    });
    conn.on('close', function(con) {
        //console.log("Close Connection")
        clients.filter(c=> c !== con)
    });
});


module.exports = echo;
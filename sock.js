const express = require('express');
const sockjs = require('sockjs');
let clients=[]
const echo = sockjs.createServer({ prefix:'/websocket', heartbeat_delay:5000, disconnect_delay:120000});
echo.on('connection', function(conn) {
    clients.push(conn)
    //console.log("New connection")
    //console.log(conn)
    conn.on('data', function(message) {
        clients.forEach(c=>{
            if(c.readyState === 1) {
                c.write(message)
                console.log(`wrote message to ${c.url}`)
            }
        })
        console.log('message recieved')
        //console.log(message)

    });

    conn.on('close', function() {
        console.log(`clients length = ${clients.length}`)
        clients = clients.filter(conn => conn.readyState <=1)
        console.log(`clients length = ${clients.length}`)
    });
});


module.exports = echo;
const express = require('express');
const sockjs = require('sockjs');
let clients=[]
const echo = sockjs.createServer({ prefix:'/websocket', heartbeat_delay:5000, disconnect_delay:120000});
echo.on('connection', function(conn) {
    clients.push(conn)
    //console.log("New connection")
    //console.log(conn)
    conn.on('data', function(message) {
        if(message!== "test" && message!== "stay alive" && message!== "display open test"){
        clients.forEach(c=>{
            if(c.readyState === 1) {
                c.write(message)
                console.log(`wrote message ${message} to ${c.url}`)
            }
        })
        console.log('message received')
        }
        console.log(`test \"${message}\" received`);
        //console.log(message)

    });

    conn.on('close', function() {
        console.log(`clients length = ${clients.length}`)
        clients.forEach(c=>{
            console.log(`Client url: ${c.url} \n Client ready state: ${c.readyState}`)
        })
        clients = clients.filter(conn => conn.readyState <= 1)
        console.log(`clients length = ${clients.length}`)
    });
});


module.exports = echo;
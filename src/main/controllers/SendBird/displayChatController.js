// const express = require('express');
// const {serviceCall} = require("./displayChatService");
// const {debuglog} = require("../../util/debugCommands");
// const displayChatController = express.Router()
//
// /**
//  * @swagger
//  *
//  * //:
//  *   get:
//  *     description: gets all contact lists
//  *     produces:
//  *       - application/json
//  *     responses:
//  *       200:
//  *         description: send a text
//  */
// displayChatController.get('/', (req, res) => {
//     serviceCall();
//     debuglog("zzz-template home")
//     res.send("zzz-template home");
// })
//
// //TODO Send commands
//
// //TODO SEND NECESSARY INFO THROUGH CHAT
//
// displayChatController.post('/trigger-action/:action', (req, res)=>{
//     let messageText = req.params.action;
//     let messageData = JSON.stringify(req.body);
//
// })
//
//
// module.exports = displayChatController;

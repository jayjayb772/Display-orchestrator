const express = require('express');
const {sendDiscordMessage} = require("./discordService");
const {debuglog} = require("../../util/debugCommands");
const discordController = express.Router()

/**
 * @swagger
 *
 * /discordController/:
 *   get:
 *     description: gets all contact lists
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: send a text
 */
discordController.get('/', (req, res) => {
    debuglog("discordController home")
    res.send("discordController home");
})

discordController.post('/send-message', (req, res) => {
    debuglog("discordController home")
    let b = req.body
    debuglog(b)
    sendDiscordMessage(b)
    res.send(req);
})








module.exports = discordController;

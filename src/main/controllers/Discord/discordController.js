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
    try{
        debuglog("discordController home")
        debuglog(req.body)
        sendDiscordMessage(req.body).then((mRes)=>{
            res.send("Success!").status(mRes.statusCode)
        }, (eStat, err)=>{
            res.send(err).status(eStat)
        })
    }catch(err){
        res.send().error();
    }
})








module.exports = discordController;

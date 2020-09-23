const express = require('express');
const {parseMessage} = require("./commitService");
const {debuglog} = require("../../util/debugCommands");
const commitController = express.Router()

/**
 * @swagger
 *
 * /zzz-template/:
 *   get:
 *     description: gets all contact lists
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: send a text
 */
commitController.post('/push-event', async (req, res) => {
    parseMessage(req.body).then(discordRes=>{
        res.send(discordRes).ok;
    }).catch(err=>{
        res.send(err);
    });
    debuglog("push event")

})


module.exports = commitController;

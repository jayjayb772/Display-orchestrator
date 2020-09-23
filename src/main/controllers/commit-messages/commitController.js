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
commitController.post('/push-event', (req, res) => {
    parseMessage(req.body);
    debuglog("push event")
    res.send().ok;
})


module.exports = commitController;

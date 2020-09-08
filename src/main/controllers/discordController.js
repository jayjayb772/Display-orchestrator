const express = require('express');
const {discordCommandHandler} = require("../services/discordService");
const {debuglog} = require("../util/debugCommands");
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

/**
 * @swagger
 *
 * /discord/discord-command:
 *   post:
 *     description: handles commands from discord
 *     consumes:
 *         - application/json
 *     parameters:
 *         - in: body
 *           name: body
 *           description: body
 *           schema:
 *              type: object
 *              properties:
 *                  command:
 *                      type: string
 *                  message:
 *                      type: string
 *                  sender:
 *                      type: string
 *                  data:
 *                      type: string
 *     responses:
 *       200:
 *         description: receive commands from discord server and handle them
 */
discordController.post('/discord-command', (req, res) =>{
    debuglog(req.body);
    discordCommandHandler(req.body)
    res.status(200).send()
})


module.exports = discordController;

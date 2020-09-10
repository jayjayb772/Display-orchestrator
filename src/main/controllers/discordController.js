const express = require('express');
const {getTrainByStationAndColor} = require("../services/ctaService");
const {determineText} = require("../services/messagingService");
const {displayNewMessage} = require("../services/displayService");
const {discordMessageDisplayDTO} = require("../DataObjects/discordMessageDisplayDTO");
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

/**
 * @swagger
 *
 * /discord/display-message:
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
 *                  cmd:
 *                      type: string
 *                  message:
 *                      type: string
 *                  from:
 *                      type: string
 *     responses:
 *       200:
 *         description: receive commands from discord server and handle them
 */
discordController.post('/display-message', (req, res) =>{
    debuglog(req.body);
    debuglog("Message!")
    displayNewMessage(discordMessageDisplayDTO(req.body))
    res.status(200).send()
})

/**
 * @swagger
 *
 * /discord/display-message:
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
 *                  cmd:
 *                      type: string
 *                  message:
 *                      type: string
 *                  from:
 *                      type: string
 *                  to:
 *                      type: string
 *                  relationship:
 *                      type: string
 *     responses:
 *       200:
 *         description: receive commands from discord server and handle them
 */
discordController.post('/send-text', (req, res) =>{
    debuglog(req.body);
    debuglog("sending text!")
    determineText(req.body).then(r=>{
        res.status(200).send()
    }).catch(err=>{
        res.status(400).send(err)
    })

})





module.exports = discordController;

const express = require('express');
const {determineText} = require("./messagingService");
const {debuglog} = require("../../util/debugCommands");
const messagingServiceController = express.Router()

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
messagingServiceController.get('/', (req, res) => {
    debuglog("messaging zzz-template home")
    res.send("messaging zzz-template home");
})

/**
 * @swagger
 *
 * /messaging-service/send-text:
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
messagingServiceController.post('/send-text', (req, res) =>{
    debuglog(req.body);
    debuglog("sending text!")
    determineText(req.body).then(r=>{
        res.status(200).send()
    }).catch(err=>{
        res.status(400).send(err)
    })

})


module.exports = messagingServiceController;

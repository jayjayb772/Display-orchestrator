const express = require('express');
const {determineText} = require("./subscriptionService");
const {debuglog} = require("../../util/debugCommands");
const subscriptionController = express.Router()

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
subscriptionController.get('/', (req, res) => {
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
subscriptionController.post('/subscription', (req, res) =>{
    debuglog(req.body);
    debuglog("Got subscription")
    res.send("ok").ok;
})

subscriptionController.get('/subscription', ((req, res) => {
    res.send("depreciated").ok
}))

subscriptionController.post('/send-notification', ((req, res) => {
    res.send("ok");
}))


module.exports = subscriptionController;

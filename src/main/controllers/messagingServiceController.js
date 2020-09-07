const express = require('express');
const {incomingTextToDTO} = require("../DataObjects/textInfoDTO");
const {debuglog} = require("../util/debugCommands");
const messagingServiceController = express.Router()

/**
 * @swagger
 *
 * /controller/:
 *   get:
 *     description: gets all contact lists
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: send a text
 */
messagingServiceController.get('/', (req, res) => {
    debuglog("messaging controller home")
    res.send("messaging controller home");
})

/**
 * @swagger
 *
 * /messaging-service/incoming-text:
 *   post:
 *     description: send multiple texts
 *     consumes:
 *         - application/json
 *     parameters:
 *         - in: body
 *           name: body
 *           description: body
 *           schema:
 *              type: object
 *              required:
 *                  - from
 *                  - relation
 *                  - message
 *              properties:
 *                  from:
 *                      type: string
 *                  relation:
 *                      type:string
 *                  message:
 *                      type: string
 *     responses:
 *       200:
 *         description: send a text
 */
messagingServiceController.post('/incoming-text', (req, res) =>{
    let textInfo = incomingTextToDTO(req.body);
    res.ok;
})


module.exports = messagingServiceController;

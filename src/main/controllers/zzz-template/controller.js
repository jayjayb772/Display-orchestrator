const express = require('express');
const {serviceCall} = require("./controllerService");
const {debuglog} = require("../../util/debugCommands");
const controller = express.Router()

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
controller.get('/', (req, res) => {
    serviceCall();
    debuglog("zzz-template home")
    res.send("zzz-template home");
})


module.exports = controller;

const express = require('express');
const {debuglog} = require("../util/debugCommands");
const googleHomeController = express.Router()

/**
 * @swagger
 *
 * /googleHomeController/:
 *   get:
 *     description: gets all contact lists
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: send a text
 */
googleHomeController.get('/', (req, res) => {
    debuglog("googleHomeController home")
    res.send("googleHomeController home");
})


module.exports = googleHomeController;

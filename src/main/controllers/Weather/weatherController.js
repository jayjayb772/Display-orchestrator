const express = require('express');
const {debuglog} = require("../../util/debugCommands");
const weatherController = express.Router()

/**
 * @swagger
 *
 * /weather/:
 *   get:
 *     description: gets all contact lists
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: send a text
 */
weatherController.get('/', (req, res) => {
    debuglog("weatherController home")
    res.send("weatherController home");
})


module.exports = weatherController;

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



module.exports = commitController;

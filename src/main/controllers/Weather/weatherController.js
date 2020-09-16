const express = require('express');
const {getForecastWeek} = require("./weatherService");
const {getForecastNow} = require("./weatherService");
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

weatherController.get('/forecast-now', (req, res) => {
    getForecastNow(req.query.city, req.query.state).then(r => {
        res.header("Content-type", "application/json").header("Access-Control-Allow-Origin", "*");
        res.send(r);
    }).catch(err=>{
        console.log(err)
        res.send(err).status(500);
    })
})

weatherController.get('/forecast-week', (req, res) => {
    getForecastWeek(req.query.city, req.query.state).then(r => {
        res.header("Content-type", "application/json").header("Access-Control-Allow-Origin", "*");
        res.send(r);
    }).catch(err=>{
        console.log(err)
        res.send(err).status(500);
    })
})

module.exports = weatherController;

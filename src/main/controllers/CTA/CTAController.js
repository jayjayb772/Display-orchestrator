const express = require('express');
const {getTrainByStationAndColor} = require("./ctaService");
const {debuglog} = require("../../util/debugCommands");
const CTAController = express.Router()

CTAController.get('/train-times', (req, res)=>{
    getTrainByStationAndColor(req.query.name, req.query.color).then(r => {
        res.header("Content-type", "application/json").header("Access-Control-Allow-Origin", "*");
        res.send(r);
    }).catch(err=>{
        console.log(err)
        res.send(err).status(500);

    })
})

module.exports = CTAController
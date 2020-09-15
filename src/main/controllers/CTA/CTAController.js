const express = require('express');
const {getTrainByStationAndColor} = require("./ctaService");
const {debuglog} = require("../../util/debugCommands");
const CTAController = express.Router()

CTAController.get('/train-times', (req, res)=>{
    getTrainByStationAndColor(req.query.name, req.query.color).then(r => {
        res.send(r).header("Content-type", "application/json");
    }).catch(err=>{
        console.log(err)
        res.send(err).status(500);

    })
})

module.exports = CTAController
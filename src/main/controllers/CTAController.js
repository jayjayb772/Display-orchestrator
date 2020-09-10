const express = require('express');
const {getTrainByStationAndColor} = require("../services/ctaService");
const {debuglog} = require("../util/debugCommands");
const CTAController = express.Router()

CTAController.get('/train-times', (req, res)=>{
    getTrainByStationAndColor(req.query.name, req.query.color).then(r => {
        res.send(r);
    }).catch(err=>{
        console.log(err)
        res.send(err).status(500);

    })
})

module.exports = CTAController
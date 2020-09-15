const request = require('request');

function getTrainByStationAndColor(stationName, color){
        let url = `${process.env.CTAPI_URL}/orchestrator/train-times?name=${stationName}&color=${color}`;
        request.get(url, (err,res)=>{
            if(err){
                throw err;
            }
            return(res.body);
        })
}

module.exports = {getTrainByStationAndColor}
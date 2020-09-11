const request = require('request');

async function getTrainByStationAndColor(stationName, color){
    return new Promise(async function (resolve, reject) {
        let url = `${process.env.CTAPI_URL}/orchestrator/train-times?name=${stationName}&color=${color}`;
        request.get(url, (err,res)=>{
            if(err){
                reject(err);
            }
            resolve(res.body);
        })
    });
}

module.exports = {getTrainByStationAndColor}
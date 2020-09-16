const request = require('request');


function getForecastNow(city, state){
    return new Promise((resolve,reject)=>{
        let url = `${process.env.weatherURL}/weather/forecast-now?city=${city}&state=${state}`;
        request.get(url, (err,res)=>{
            if(err){
                reject(err);
            }
            resolve(res.body);
        })
    });
}

function getForecastWeek(city, state){
    return new Promise((resolve,reject)=>{
        let url = `${process.env.weatherURL}/weather/forecast-week?city=${city}&state=${state}`;
        request.get(url, (err,res)=>{
            if(err){
                reject(err);
            }
            resolve(res.body);
        })
    });
}

module.exports = {getForecastNow, getForecastWeek}
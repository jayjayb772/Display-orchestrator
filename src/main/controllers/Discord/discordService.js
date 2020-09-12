const {debuglog} = require("../../util/debugCommands");
const request = require('request')

function options(body) {
    let a = JSON.stringify(body)
    return {
        "headers": {
            "content-type": "application/json"
        },
        "body": a
    }
}
function sendDiscordMessage(reqBody, resA){
    return new Promise(((resolve, reject) => {
        let msg = {
                        "content": `${reqBody.message}`
                  }
        request.post(`${process.env.discordWebhookUrl}`,options(msg), (err,res)=>{
            if(err){
                reject(resA.send(err).status(500));
            }
            if(res.status!==204){
                reject(resA.send(res).status(res.status))
            }
            resolve(resA.send(res).status(res.status));
        })
    }))
    return;
}



module.exports = {sendDiscordMessage}

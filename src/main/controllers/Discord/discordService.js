const {debuglog} = require("../../util/debugCommands");
const request = require('request')

function options(body) {
    return {
        "headers": {
            "content-type": "application/json"
        },
        "body": body
    }
}
function sendDiscordMessage(reqBody, resA){
    return new Promise(((resolve, reject) => {
        let msg = {
                        "content": `${reqBody.message}`
                  }
        request.post(`${process.env.discordWebhookUrl}`, options(reqBody), (err,res)=>{
            if(err){
                reject(err);
            }
            resolve(resA.send(res));
        })
    }))
    return;
}



module.exports = {sendDiscordMessage}

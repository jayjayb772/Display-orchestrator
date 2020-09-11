const {debuglog} = require("../../util/debugCommands");
const request = require('request')
function sendDiscordMessage(reqBody){
    debuglog(reqBody);
    return new Promise(((resolve, reject) => {
        let msg = {
                        "content": `${reqBody.message}`
                  }
        request.post(`${process.env.discordWebhookUrl}`, JSON.stringify(msg), (err,res)=>{
            if(err){
                reject(err);
            }
            resolve(res);
        })
    }))
    return;
}



module.exports = {sendDiscordMessage}

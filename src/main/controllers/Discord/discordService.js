const {debuglog} = require("../../util/debugCommands");
const request = require('request')
function sendDiscordMessage(reqBody, resA){
    debuglog(reqBody);
    return new Promise(((resolve, reject) => {
        let msg = {
                        "content": `${reqBody.message}`
                  }
        request.post(`${process.env.discordWebhookUrl}`, msg, (err,res)=>{
            if(err){
                reject(err);
            }
            resolve(resA.send(res));
        })
    }))
    return;
}



module.exports = {sendDiscordMessage}

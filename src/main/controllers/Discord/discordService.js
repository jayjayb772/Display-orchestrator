const {debuglog} = require("../../util/debugCommands");
const request = require('request')
function sendDiscordMessage(reqBody, res){
    debuglog(reqBody);
    return new Promise(((resolve, reject) => {
        let msg = {
                        "content": `${reqBody.message}`
                  }
        request.post(`${process.env.discordWebhookUrl}`, msg, (err,res)=>{
            if(err){
                reject(err);
            }
            resolve(res.send(res));
        })
    }))
    return;
}



module.exports = {sendDiscordMessage}

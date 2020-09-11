const {debuglog} = require("../../util/debugCommands");
const request = require('request')
function sendDiscordMessage(reqBody){
    debuglog(reqBody);
    return new Promise(((resolve, reject) => {
        request.post(`${process.env.discordWebhookUrl}`, JSON.stringify({"Hi":reqBody}), (err,res)=>{
            if(err){
                reject(err);
            }
            resolve(res);
        })
    }))
    return;
}



module.exports = {sendDiscordMessage}
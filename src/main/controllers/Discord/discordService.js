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
async function sendDiscordMessage(reqBody, resA){
    return new Promise(await ((resolve, reject) => {
        let msg = {
                        "content": `${reqBody.message}`
                  }
        request.post(`${process.env.discordWebhookUrl}`,options(msg), (err,res)=>{
            if(err){
                reject(resA.send(err).status(500));
            }
            debuglog(res.statusCode)
            if(res.statusCode!==204){
                reject(res.statusCode, res.body)
            }
            resolve(res);
        })
    }))
    return;
}



module.exports = {sendDiscordMessage}

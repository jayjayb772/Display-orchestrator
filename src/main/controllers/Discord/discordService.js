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

//region commit message push
function makeEmbed(title, desc, color, url=null){
    let embed =  {
        "title": `${title}`,
        "description": `${desc}`,
        "color": `${color}`
    }
    if(url !== null){
        embed["url"] = `${url}`
    }
    return embed;
}

function determineEmbeds(body){
    let initial = makeEmbed(`Modified Repo: ${body.repository.name}`,
        `Commit message: ${body.commits[0].message}`,
        4095,
        `${body.repository.url}`
    )
    let embeds = [initial]

    if(body.commits[0].added.length > 0){
        let added = makeEmbed(`Files added to ${body.repository.name}`,
            body.commits[0].added,
            484940,
            body.head_commit.url)
        embeds.push(added)
    }
    if(body.commits[0].removed.length > 0){
        let removed = makeEmbed(`Files removed from ${body.repository.name}`,
            body.commits[0].removed,
            16711680,
            body.head_commit.url)
        embeds.push(removed)
    }
    if(body.commits[0].modified.length > 0){
        let modified = makeEmbed(`Files modified in ${body.repository.name}`,
            body.commits[0].modified,
            16775552,
            body.head_commit.url)
        embeds.push(modified)
    }

    return embeds
}

async function commitMessage(body) {
    console.log(body)

    let embeds = determineEmbeds(body);
    let message = JSON.stringify({
        "content": `New Commit in ${body.repository.name}`,
        "embeds": [embeds]
    })
    let options = {
        "headers": {
            "content-type": "application/json"
        },
        "body": message
    }

    request.post(`${process.env.DISCORD_COMMIT_URL}`, options, (err, res) => {
        console.log(res)
        return res
    })

}
//endregion


//region sendErrors
async function sendError(body) {
    console.log(body)

    let embeds = makeEmbed("ERROR",body,16711680);
    let message = JSON.stringify({
        "content": `Display board error`,
        "embeds": embeds
    })
    let options = {
        "headers": {
            "content-type": "application/json"
        },
        "body": message
    }

    request.post(`${process.env.DISCORD_ERROR_URL}`, options, (err, res) => {
        console.log(res)
        return res
    })
}
//endRegion




module.exports = {sendDiscordMessage, commitMessage, sendError}

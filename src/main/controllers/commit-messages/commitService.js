const request = require('request')

async function parseMessage(bodyIn) {
    let body = JSON.parse(bodyIn)
    return new Promise(await ((resolve, reject) => {
        try {
            console.log(body)
            let message = {}
            let options = {
                headers: {
                    "Content-type": "application/json"
                },
                body: {
                    content: "New Commit",
                    embeds: [{
                        'title': `${body.commits[0].message}`,
                        'description': `Modified Repo: ${body.repository.name}`,
                        'url': `${body.html_url}`,
                        'color': "#FF0000"
                    }]
                },
                content: {
                    content: "New Commit",
                    embeds: [{
                        'title': `${body.commits[0].message}`,
                        'description': `Modified Repo: ${body.repository.name}`,
                        'url': `${body.html_url}`,
                        'color': "#FF0000"
                    }]
                }
            }

            request.post(`${process.env.DISCORD_COMMIT_URL}`, options, (err, res) => {
                console.log(res)
                resolve(res)
            })
        }catch(err){
            console.log(err);
            reject(err)
        }
    }))
}

module.exports = {parseMessage}
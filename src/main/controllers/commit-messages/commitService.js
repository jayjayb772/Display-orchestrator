const request = require('request')

async function parseMessage(body) {
            console.log(body)
            let message = JSON.stringify({
                "content": "New Commit",
                "embed": [{
                    'title': `${body.commits[0].message}`,
                    'description': `Modified Repo: ${body.repository.name}`,
                    'url': `${body.html_url}`,
                    'color': "#FF0000"
                }]
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

module.exports = {parseMessage}
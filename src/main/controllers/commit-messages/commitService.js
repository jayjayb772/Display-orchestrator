const request = require('request')

async function parseMessage(body) {
            console.log(body)
            let message = {}
            let options = {
                "headers": {
                    "Content-type": "application/json"
                },
                "body": {
                    "content": "New Commit",
                    "embeds": [{
                        'title': `${body.commits[0].message}`,
                        'description': `Modified Repo: ${body.repository.name}`,
                        'url': `${body.html_url}`,
                        'color': "#FF0000"
                    }]
                }
            }

            request.post(`${process.env.DISCORD_COMMIT_URL}`, options, (err, res) => {
                console.log(res)
                return res
            })

}

module.exports = {parseMessage}
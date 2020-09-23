const request = require('request')

function parseMessage(body) {
    console.log(JSON.stringify(body))
    let message = {}
    let options = {
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            embeds: [{
                'title': `${body.commits[0].message}`,
                'description': `Modified Repo: ${body.repository.name}`,
                'url': `${body.html_url}`,
                'color': "#FF0000"
            }]
        }),
        content: JSON.stringify({
            embeds: [{
                'title': `${body.commits[0].message}`,
                'description': `Modified Repo: ${body.repository.name}`,
                'url': `${body.html_url}`,
                'color': "#FF0000"
            }]
        })
    }

    request.post(`${process.env.DISCORD_COMMIT_URL}`, options, (err, res) => {
        console.log(res)
    })

}

module.exports = {parseMessage}
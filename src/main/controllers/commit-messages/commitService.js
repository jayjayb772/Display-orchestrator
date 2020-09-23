const request = require('request')

function parseMessage(body) {
    console.log(JSON.stringify(body))
    let message = {}
    let options = {
        headers: {
            "Content-type": "application/json"
        },
        content: JSON.stringify({
            embed: {
                'title': `${body.commits[0].message}`,
                'description': `Modified Repo: ${body.repository.name}`,
                'url': `${body.html_url}`,
                'color': "#FF0000"
            }
        })
    }

    request.post(`${process.env.DISCORD_COMMIT_URL}`, options, (err, res) => {
        console.log(res)
    })

}

module.exports = {parseMessage}
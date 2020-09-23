const request = require('request')
function parseMessage(body){
    console.log(JSON.stringify(body))
    let message = {
        embed: {
            title: `${body.commits[0].message}`,
            description: `Modified Repo: ${body.repository.name}`,
            url: `${body.html_url}`,
            color: "#FF0000"
        }
    }
    let options = {
        body:JSON.stringify(message)
    }

request.post(`${process.env.DISCORD_COMMIT_URL}`, options, (err, res)=>{
    console.log(res)
} )

}
module.exports = {parseMessage}
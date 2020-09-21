function determineText(textBody) {
    return new Promise(function (resolve, reject) {
        let message = textBody.message += `\n-${textBody.from}`
        if (textBody.to) {
            sendSingleText(textBody.to, message, resolve, reject)
        } else {
            sendMultipleTexts(textBody.relationship, message, resolve, reject)
        }
    })
}

function sendSingleText(textBody, message, resolve, reject) {

    let body = JSON.stringify({
        "to": textBody.to,
        "message": message
    })
    let options = options(body)
    console.log(options)

    let uri = url()
    request.post(`${uri}orchestrator/send-text-single`, options, (err, res) => {
        if (res.body.statusCode !== 200) {
            console.log(res);
            reject(res)
        }
        console.log(res)
        resolve(res)
    })
}

function sendMultipleTexts(relationship, message, resolve, reject) {
    if(relationship!== 'Family' && relationship!== 'Friends' && relationship!== 'Residents'){
        reject("invalid relationship")
    }
    let body = JSON.stringify({
        "relationship": relationship,
        "message": message
    })
    let options = options(body)
    console.log(options)

    let uri = url()
    request.post(`${uri}orchestrator/send-text-multiple`, options, (err, res) => {
        if (res.body.statusCode !== 200) {
            console.log(res);
            reject(res)
        }
        console.log(res)
        resolve(res)
    })
}

function options(body) {
    return {
        "headers": {
            "content-type": "application/json"
        },
        "body": body
    }
}

function url() {
    switch (process.env.environment) {
        case 'dev':
            return process.env.messagingServiceURL_local
        case 'prod':
            return process.env.messagingServiceURL_prod
        default:
            return process.env.messagingServiceURL_prod
    }
}

module.exports = {determineText}
function discordMessageDisplayDTO(body){
    return {
        message: body.message,
        from: body.from
    }
}

module.exports = {discordMessageDisplayDTO}
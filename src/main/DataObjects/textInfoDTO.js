function incomingTextToDTO(textBody){
    return {
        from:textBody.from,
        relation: textBody.relation,
        message: textBody.message
    }
}

module.exports = {incomingTextToDTO}
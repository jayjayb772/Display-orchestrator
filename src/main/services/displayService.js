const {debuglog} = require("../util/debugCommands");

function displayNewMessage(messageInfo){
    debuglog(messageInfo.message);
    debuglog(messageInfo.from);
    return;
}

module.exports = {displayNewMessage}

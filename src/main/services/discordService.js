const {debuglog} = require("../util/debugCommands");

function discordCommandHandler(reqBody){
    debuglog(reqBody);
    return;
}

module.exports = {discordCommandHandler}
const chalk = require("chalk")

function output (message, lvl) {
    var returnMessage = "";
    switch (lvl) {
        case "error":
            returnMessage = chalk.red("[ERROR]: " + message);
            break;
        case "warn":
            returnMessage = chalk.yellow("[WARN]: " + message);
            break;
        case "info":
            returnMessage = chalk.cyan("[INFO]: " + message);
            break;
        case "debug":
            returnMessage = chalk.green("[DEBUG]: " + message);
            break;
        default:
            returnMessage = chalk.white(message);
            break;
    }
    console.log(returnMessage);
}

module.exports = {
    log: output
}
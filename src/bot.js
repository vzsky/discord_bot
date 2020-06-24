const { bot, logger } = require("./setup");
const { ping, pong, bo, ba, version } = require("./basic");

const CMD = "!";

bot.on("message", (user, userID, channelID, message, evt) => {
  if (message.substring(0, 1) == CMD) {
    logger.info(user + " said " + message);
    var args = message.substring(1).split(" ");
    var cmd = args[0];
    args = args.splice(1);

    if (cmd.toLowerCase() === "ping") ping(cmd, bot, channelID);
    else if (cmd.toLowerCase() === "pong") pong(cmd, bot, channelID);
    else if (cmd.toLowerCase() === "bo") bo(bot, channelID);
    else if (cmd.toLowerCase() === "ba") ba(bot, channelID);
    else if (cmd.toLowerCase() == "v" || cmd.toLowerCase() == "-v")
      version(bot, channelID);
  }
});

const { bot, logger } = require("./setup");
const { ping, pong } = require("./basic");

const CMD = "!";

bot.on("message", (user, userID, channelID, message, evt) => {
  if (message.substring(0, 1) == CMD) {
    logger.info(user + " said " + message);
    var args = message.substring(1).split(" ");
    var cmd = args[0];
    args = args.splice(1);

    if (cmd === "ping") ping(bot, channelID);
    if (cmd === "pong") pong(bot, channelID);
  }
});

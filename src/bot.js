const { bot, logger, config } = require("./setup");
const { ping } = require("./basic");

bot.on("message", (user, userID, channelID, message, evt) => {
  if (message.substring(0, 1) == config.cmd) {
    logger.info(user + " said " + message);
    var args = message.substring(1).split(" ");
    var cmd = args[0];
    args = args.splice(1);

    if (cmd === "ping") ping(bot, channelID);
  }
});

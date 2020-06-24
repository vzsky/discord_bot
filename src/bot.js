const { bot, logger } = require("./setup");
const { ping, pong, bo, ba, version } = require("./basic");
const { codeforces } = require("./codeforces");

const CMD = "!";

bot.on("message", (user, userID, channelID, message, evt) => {
  if (message.substring(0, 1) == CMD) {
    logger.info(user + "#" + userID + " said " + message);

    var args = message.substring(1).split(" ");
    var cmd = args[0].toLowerCase();
    args = args.splice(1);

    ctx = { bot, user, userID, channelID, cmd, args, evt };

    if (cmd === "ping") ping(ctx);
    if (cmd === "pong") pong(ctx);
    if (cmd === "bo") bo(ctx);
    if (cmd === "ba") ba(ctx);
    if (cmd === "cf") codeforces(ctx);
    if (cmd === "v") version(ctx);

  }
});

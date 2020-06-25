const { bot, logger } = require("./setup");
const { ping, pong, bo, ba, version, tableflip } = require("./basic");
const cfcommand = require("./codeforces");
const { messageSenderGenerator } = require("./utils");

const CMD = "!";
const idiot = messageSenderGenerator("Read help first u fuking IDIOT!");

const codeforces = (ctx) => {
  let cmd = ctx.args[0];
  cfcommand[cmd] == null ? idiot(ctx) : cfcommand[cmd](ctx);
};

const commands = {
  ping,
  pong,
  bo,
  ba,
  version,
  tableflip,
  codeforces,
};

bot.on("message", (user, userID, channelID, message, evt) => {
  if (message.substring(0, 1) == CMD) {
    logger.info(user + "#" + userID + " said " + message);

    var args = message.substring(1).split(" ");
    var cmd = args[0];
    args = args.splice(1);

    ctx = { bot, user, userID, channelID, cmd, args, evt };

    cmd = cmd.toLowerCase();
    commands[cmd] == null ? idiot(ctx) : commands[cmd](ctx);
  }
});

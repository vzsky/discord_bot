const { bot, logger } = require("./setup");
const commands = require("./router");

const CMD = "!";
bot.on("message", (msg) => {
  if (!msg.author.bot && msg.content.substring(0, 1) == CMD) {
    logger.info(
      msg.author.username + "#" + msg.author.id + " said " + msg.content
    );

    let args = msg.content.substring(1).split(" ");
    msg.cmd = args;
    let cmd = args[0].toLowerCase();
    commands[cmd] == null ? commands.idiot(msg) : commands[cmd](msg);
  }
});

module.exports = commands;

const { bot, logger } = require("./setup");
const { ping, pong, bo, ba, version, tableflip } = require("../basic");
const cfcommand = require("./codeforces");
const { messageReplyGenerator } = require("./utils");

const CMD = "!";
const idiot = messageReplyGenerator("Read help first u fuking IDIOT!");

const codeforces = (msg) => {
  let cmd = msg.args[0];
  console.log(cmd);
  cfcommand[cmd] == null ? idiot(msg) : cfcommand[cmd](msg);
};

const commands = {
  ping,
  pong,
  bo,
  ba,
  version,
  tableflip,
  cf: codeforces,
};

bot.on("message", (msg) => {
  if (msg.content.substring(0, 1) == CMD) {
    logger.info(
      msg.author.username + "#" + msg.author.id + " said " + msg.content
    );

    var args = msg.content.substring(1).split(" ");
    var cmd = args[0];
    args = args.splice(1);

    msg.args = args;
    cmd = cmd.toLowerCase();
    commands[cmd] == null ? idiot(msg) : commands[cmd](msg);
  }
});

const { bot, logger } = require("./setup");
const {
  ping,
  pong,
  bo,
  ba,
  version,
  tableflip,
  help,
  rollDice,
} = require("../basic");
const cfcommand = require("./codeforces");
const { messageReplyGenerator } = require("./utils");

const CMD = "!";
const idiot = messageReplyGenerator("Read help first u fuking IDIOT!");

const codeforces = (msg) => {
  let cmd = msg.cmd[1];
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
  help,
  dice: rollDice,
};

bot.on("message", (msg) => {
  if (msg.content.substring(0, 1) == CMD) {
    logger.info(
      msg.author.username + "#" + msg.author.id + " said " + msg.content
    );

    let args = msg.content.substring(1).split(" ");
    msg.cmd = args;
    let cmd = args[0].toLowerCase();
    commands[cmd] == null ? idiot(msg) : commands[cmd](msg);
  }
});

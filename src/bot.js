const { bot, logger } = require("./setup");
const {
  ping,
  pong,
  bo,
  ba,
  version,
  tableflip,
  rollDice,
  pick,
} = require("./basic");
const cfcommand = require("./codeforces");
const { messageReplyGenerator, helperMessage } = require("./utils");

const CMD = "!";
const idiot = messageReplyGenerator("Implement it first u fuking IDIOT!");

const codeforces = (msg) => {
  let cmd = msg.cmd[1];
  console.log(cmd);
  cfcommand[cmd] == null ? idiot(msg) : cfcommand[cmd](msg);
};

const helpcmd = {
  headers: ["use ! as prefix"],
  type: ["all main commands"],
  commands: [
    { usage: "version", desc: "display manually updated version" },
    { usage: "cf [subcommand]", desc: "codeforces commands" },
    { usage: "dice", desc: "roll a dice" },
    { usage: "pick a,b,c", desc: "pick one from the list" },
  ],
};

const help = messageReplyGenerator(helperMessage(helpcmd));

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
  pick,
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

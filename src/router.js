const {
  ping,
  pong,
  bo,
  ba,
  version,
  tableflip,
  rollDice,
  pick,
  quote,
} = require("./basic");
const cfcommand = require("./codeforces");
const { messageReplyGenerator, helperMessage } = require("./utils");

const idiot = messageReplyGenerator("Implement it first u f*cking IDIOT!");

const codeforces = (msg) => {
  let cmd = msg.cmd[1];
  cfcommand[cmd] == null ? idiot(msg) : cfcommand[cmd](msg);
};

const helpcmd = {
  headers: ["use ! as prefix"],
  type: ["all main commands"],
  commands: [
    { usage: "version", desc: "display manually updated version" },
    { usage: "cf [subcommand]", desc: "codeforces commands" },
    { usage: "dice", desc: "roll a dice" },
    { usage: "pick a,b,c,...", desc: "pick one from the list" },
  ],
};

const help = messageReplyGenerator(helperMessage(helpcmd));

module.exports = {
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
  idiot,
  quote,
};

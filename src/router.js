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

const idiot = messageReplyGenerator("Implement it first u fuking IDIOT!");

const codeforces = (msg) => {
  let cmd = msg.cmd[1];
  cfcommand[cmd] == null ? idiot(msg) : cfcommand[cmd](msg);
};

const helpcmd = {
  headers: ["use ! as prefix"],
  type: ["all main commands"],
  commands: [
    { usage: "version\t\t\t\t\t\t", desc: "display manually updated version" },
    { usage: "cf [subcommand]\t\t", desc: "codeforces commands" },
    { usage: "dice\t\t\t\t\t\t\t", desc: "roll a dice" },
    { usage: "pick a,b,c,...\t\t\t\t", desc: "pick one from the list" },
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
};

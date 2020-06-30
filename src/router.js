const {
  ping,
  pong,
  bo,
  ba,
  version,
  rollDice,
  pick,
  quote,
  def,
} = require("./basic/main");
const cf = require("./codeforces/main");
const { messenger, helperMessage } = require("./utils");

const helpcmd = {
  headers: ["use ! as prefix"],
  type: ["all main commands"],
  commands: [
    { usage: "version", desc: "display version" },
    { usage: "cf [subcommand]", desc: "codeforces commands" },
    { usage: "dice", desc: "roll a dice" },
    { usage: "pick a,b,c,...", desc: "pick one from the list" },
  ],
};

const help = messenger(() => helperMessage(helpcmd));

module.exports = {
  ping,
  pong,
  bo,
  ba,
  version,
  cf,
  help,
  dice: rollDice,
  pick,
  def,
  quote,
};

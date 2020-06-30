const { messenger, helperMessage } = require("../utils");
const { def } = require("../basic/main");

const config = require("./config");
const rating = require("./rating");

let helpcmd = {
  type: "subcommands",
  headers: ["codeforces command", "USAGE : cf [subcommand]"],
  commands: [
    { usage: "config [cfhandle]", desc: "config handle with discord id" },
    { usage: "rating", desc: "display cf rating" },
  ],
};

const help = messenger(() => helperMessage(helpcmd));

const cfcommand = {
  config,
  help,
  rating,
};

const codeforcesHandler = (msg) => {
  let cmd = msg.cmd[1];
  cfcommand[cmd] == null ? def(msg) : cfcommand[cmd](msg);
};

module.exports = codeforcesHandler;

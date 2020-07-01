const { messenger, helperMessage } = require("../utils");
const { def } = require("../basic/main");

const remindin = require("./remindin");

let helpcmd = {
  type: "options",
  headers: ["reminder command", "USAGE : remind [options]"],
  commands: [
    {
      usage: "in [time] (text)",
      desc:
        "set a reminder, [time] seconds in the future, (text) optional text to remind",
    },
  ],
};

const help = messenger(() => helperMessage(helpcmd));

const command = {
  help,
  in: remindin,
};

const reminderHandler = (msg) => {
  let cmd = msg.cmd[1];
  command[cmd] == null ? def(msg) : command[cmd](msg);
};

module.exports = reminderHandler;

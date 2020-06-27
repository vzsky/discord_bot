const readline = require("readline");
const commands = require("./router");

const msgMocker = (inp) => {
  return {
    channel: {
      send: (x) => console.log(x),
      id: "idMockchannel",
      name: "mockchannel",
      guild: {
        id: "idTestlocal",
        name: "testlocal",
      },
    },
    content: inp,
    author: {
      id: "tester",
      bot: false,
      username: "tester",
    },
  };
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const CMD = "!";

rl.question("", (inp) => {
  msg = msgMocker(inp);
  if (!msg.author.bot && msg.content.substring(0, 1) == CMD) {
    console.log("TEST#local said " + msg.content);

    let args = msg.content.substring(1).split(" ");
    msg.cmd = args;
    let cmd = args[0].toLowerCase();

    let run = commands[cmd];
    if (run == null) {
      console.log("no commands");
    } else {
      run(msg);
    }
  }
  rl.close();
});

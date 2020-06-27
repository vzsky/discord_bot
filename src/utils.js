const fetch = require("node-fetch");

const botReply = (msg, reply) => {
  msg.channel.send(reply);
};

const messageReplyGenerator = (reply) => {
  return (message) => {
    botReply(message, reply);
  };
};

const getapi = async (path) => {
  try {
    let res = await fetch(path);
    let json = await res.json();
    return json;
  } catch (e) {
    return;
  }
};

const randList = (theList) => {
  return theList[Math.floor(Math.random() * theList.length)];
};

const helperMessage = (help) => {
  s = "";
  for (let h of help.headers) {
    s += h + "\n";
  }
  s += "\n";
  s += help.type + " are\n";

  let maxCmdLength = 0;

  for (let cmd of help.commands) {
    maxCmdLength = Math.max(maxCmdLength, cmd.length.usage);
  }

  for (let h of help.commands) {
    let cmd = h.usage;
    while (cmd.length < maxCmdLength) {
      cmd += " ";
    }
    s += "- " + cmd + " : " + h.desc + "\n";
  }
  return s;
};

module.exports = {
  botReply,
  messageReplyGenerator,
  getapi,
  randList,
  helperMessage,
};

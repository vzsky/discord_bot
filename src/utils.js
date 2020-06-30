const fetch = require("node-fetch");

const messenger = (func) => {
  return async (message) => {
    let reply = await func(message);
    message.channel.send(reply);
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

  for (let h of help.commands) {
    let cmd = h.usage;
    s += "- " + cmd + " : " + h.desc + "\n";
  }
  return s;
};

module.exports = {
  messenger,
  getapi,
  randList,
  helperMessage,
};

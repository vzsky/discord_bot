const fetch = require("node-fetch");

const messenger = (funcs) => {
  if (funcs instanceof Function) {
    return async (message) => {
      let reply = await funcs(message);
      message.channel.send(reply);
    };
  } else {
    return async (message) => {
      for (func of funcs) {
        let reply = await func(message);
        message.channel.send(reply);
      }
    };
  }
};

const sleep = (ms) => {
  return new Promise((r) => setTimeout(r, ms));
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
  sleep,
};

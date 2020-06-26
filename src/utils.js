const fetch = require("node-fetch");
const { logger } = require("./setup");

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

module.exports = {
  botReply,
  messageReplyGenerator,
  getapi,
  randList,
};

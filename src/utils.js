const fetch = require("node-fetch");

const sendMessage = (msg, ctx) => {
  ctx.bot.sendMessage({
    to: ctx.channelID,
    message: msg,
  });
};

const messageSenderGenerator = (message) => {
  return (ctx) => {
    sendMessage(message, ctx);
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

module.exports = {
  sendMessage,
  messageSenderGenerator,
  getapi,
};

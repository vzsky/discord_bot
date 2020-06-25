const fetch = require("node-fetch");
const { logger } = require("./setup");

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

const roleSetter = (bot, serverid, roleid) => {
  bot.addToRole(
    { serverID: serverid, userID: callback.id, roleID: roleid },
    (err) => {
      if (err) logger.error(err);
    }
  );
};

module.exports = {
  sendMessage,
  messageSenderGenerator,
  getapi,
  roleSetter,
};

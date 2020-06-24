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

module.exports = {
  sendMessage,
  messageSenderGenerator,
};

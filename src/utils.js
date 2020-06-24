const sendMessage = (msg, ctx) => {
  ctx.bot.sendMessage({
    to: ctx.channel,
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

const ping = (bot, channel) => {
  bot.sendMessage({
    to: channel,
    message: "Pong!",
  });
};

module.exports = {
  ping: ping,
};

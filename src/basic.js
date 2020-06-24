const ping = (bot, channel) => {
  bot.sendMessage({
    to: channel,
    message: "Pong!",
  });
};

const pong = (bot, channel) => {
  bot.sendMessage({
    to: channel,
    message: "Ping!",
  });
};

module.exports = {
  ping: ping,
  pong: pong,
};

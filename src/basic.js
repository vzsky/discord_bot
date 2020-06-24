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

const bo = (bot, channel) => {
  bot.sendMessage({
    to: channel,
    message: "Ba!",
  });
};

const ba = (bot, channel) => {
  bot.sendMessage({
    to: channel,
    message: "Bo!",
  });
};

module.exports = {
  ping: ping,
  pong: pong,
  bo: bo,
  ba: ba,
};

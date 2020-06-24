const ping = (txt, bot, channel) => {
  message = "Pong!";
  for (var i = 0; i < txt.length; i++) {
    txt[i].isUpperCase() ? message[i].toUpperCase() : message[i].toLowerCase();
  }
  bot.sendMessage({
    to: channel,
    message: message,
  });
};

const pong = (txt, bot, channel) => {
  message = "Ping!";
  for (var i = 0; i < txt.length; i++) {
    txt[i].isUpperCase() ? message[i].toUpperCase() : message[i].toLowerCase();
  }
  bot.sendMessage({
    to: channel,
    message: message,
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

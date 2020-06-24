const messageSenderGenerator = (message) => {
  return (bot, channel) => {
    bot.sendMessage({
      to: channel,
      message: message,
    });
  };
};

const sendMessage = (message, bot, channel) => {
  bot.sendMessage({
    to: channel,
    message: message,
  });
};

const ping = (txt, bot, channel) => {
  message = "Pong!";
  sendMessage(message, bot, channel);
};

const pong = (txt, bot, channel) => {
  message = "Ping!";
  sendMessage(message, bot, channel);
};

const bo = messageSenderGenerator("Ba!");
const ba = messageSenderGenerator("Bo!");

module.exports = {
  ping: ping,
  pong: pong,
  bo: bo,
  ba: ba,
};

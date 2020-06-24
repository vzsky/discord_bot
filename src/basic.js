const messageSenderGenerator = (message) => {
  return (bot, channel) => {
    bot.sendMessage({
      to: channel,
      message: message,
    });
  };
};

const formatTxt = (txt, msg) => {
  let message = msg;
  let new_msg = "";
  for (var i = 0; i < txt.length; i++) {
    if (txt[i] === txt[i].toUpperCase()) {
      new_msg += message.charAt(i).toUpperCase();
    } else {
      new_msg += message.charAt(i).toLowerCase();
    }
  }
  for (var i = txt.length; i < message.length; i++) {
    new_msg += message[i];
  }
  return new_msg;
};

const sendMessage = (message, bot, channel) => {
  bot.sendMessage({
    to: channel,
    message: message,
  });
};

const ping = (txt, bot, channel) => {
  message = "Pong!";
  sendMessage(formatTxt(txt, message), bot, channel);
};

const pong = (txt, bot, channel) => {
  message = "Ping!";
  sendMessage(formatTxt(txt, message), bot, channel);
};

const bo = messageSenderGenerator("Ba!");
const ba = messageSenderGenerator("Bo!");

module.exports = {
  ping: ping,
  pong: pong,
  bo: bo,
  ba: ba,
};

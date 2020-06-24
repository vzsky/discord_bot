const { sendMessage, messageSenderGenerator } = require("./utils");

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

const ping = (ctx) => {
  message = "Pong!";
  sendMessage(formatTxt(ctx.cmd, message), ctx);
};

const pong = (ctx) => {
  message = "Ping!";
  sendMessage(formatTxt(ctx.cmd, message), ctx);
};

const bo = messageSenderGenerator("Ba!");
const ba = messageSenderGenerator("Bo!");

module.exports = {
  ping,
  pong,
  bo,
  ba,
};

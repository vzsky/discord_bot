const { botReply, messageReplyGenerator } = require("./src/utils");
const { bot } = require("./src/setup");

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

const ping = (msg) => {
  message = "Pong!";
  botReply(msg, formatTxt(ctx.cmd, message));
};

const pong = (msg) => {
  message = "Ping!";
  botReply(msg, formatTxt(ctx.cmd, message));
};

const bo = messageReplyGenerator("Ba!");
const ba = messageReplyGenerator("Bo!");
const tableflip = messageReplyGenerator("(╯°□°）╯︵ ┻━┻");
const version = messageReplyGenerator("12:00 | 25 June 2020 | my99n eiei");

module.exports = {
  ping,
  pong,
  bo,
  ba,
  version,
  tableflip,
};

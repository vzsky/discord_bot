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
  botReply(msg, formatTxt(msg.cmd[0], message));
};

const pong = (msg) => {
  message = "Ping!";
  botReply(msg, formatTxt(msg.cmd[0], message));
};

const bo = messageReplyGenerator("Ba!");
const ba = messageReplyGenerator("Bo!");
const tableflip = messageReplyGenerator("(╯°□°）╯︵ ┻━┻");
const help = messageReplyGenerator("!help : help\n");
const version = messageReplyGenerator("15:57 | 26 June 2020 | ItzMeOwww");

module.exports = {
  ping,
  pong,
  bo,
  ba,
  version,
  tableflip,
  help,
};

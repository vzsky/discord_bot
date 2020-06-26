const { botReply, messageReplyGenerator, randList } = require("./src/utils");
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

const rollDice = (msg) => {
  const faces = ["⚀ : 1!", "⚁ : 2!", "⚂ : 3!", "⚃ : 4!", "⚄ : 5!", "⚅ : 6!"];
  botReply(msg, randList(faces));
};

const pick = (msg) => {
  const theList = msg.content.substring(6).split(",");
  botReply(msg, "Result is : " + str(randList(theList)));
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
const help = messageReplyGenerator(
  "use ! as prefix\n- help : help\n- version : version\n- cf help : codeforces\n- dice : roll a dice\n- pick [], [], ..."
);

const version = messageReplyGenerator("19:39 | 26 June 2020 | ItzMeOwww");

module.exports = {
  ping,
  pong,
  bo,
  ba,
  version,
  tableflip,
  help,
  rollDice,
  pick,
};

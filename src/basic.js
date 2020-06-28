const { randList, messenger } = require("./utils");

const config = {
  faces: ["⚀ : 1!", "⚁ : 2!", "⚂ : 3!", "⚃ : 4!", "⚄ : 5!", "⚅ : 6!"],
  quotes: [
    "quote 1 suppose to be here",
    "quotes 2 also suppose to be here",
    "where are all the quote",
  ],
};

const pick = messenger((msg) => {
  return "Result is : " + randList(msg.cmd[1].split(","));
});
const rollDice = messenger(() => randList(config.faces));
const quote = messenger(() => randList(config.quotes));

const formatText = (txt, msg) => {
  let new_msg = "";
  for (let i = 0; i < txt.length; i++) {
    new_msg +=
      txt[i] === txt[i].toUpperCase()
        ? msg[i].toUpperCase()
        : msg[i].toLowerCase();
  }
  for (let i = txt.length; i < msg.length; i++) {
    new_msg += msg[i];
  }
  return new_msg;
};

const ping = messenger((msg) => {
  return formatText(msg.cmd[0], "Pong!");
});
const pong = messenger((msg) => {
  return formatText(msg.cmd[0], "Ping!");
});
const bo = messenger((msg) => {
  return formatText(msg.cmd[0], "Ba!");
});
const ba = messenger((msg) => {
  return formatText(msg.cmd[0], "Bo!");
});

const version = messenger(() => "10:30 | 28 June 2020 | my99n");
const idiot = messenger(() => "Implement it first u f*cking IDIOT!");

module.exports = {
  ping,
  pong,
  bo,
  ba,
  version,
  rollDice,
  pick,
  quote,
  idiot,
};

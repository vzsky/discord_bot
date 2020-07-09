const { messenger } = require("../utils");
const { rollDice, pick, quote } = require("./picker");
const { ping, pong, bo, ba, test } = require("./textReply");
const version = require("./version");
const food = require("./food");

const def = messenger(() => "Implement it first u DOOFUS!");

module.exports = {
  ping,
  pong,
  bo,
  ba,
  version,
  dice: rollDice,
  pick,
  quote,
  def,
  test,
  food,
};

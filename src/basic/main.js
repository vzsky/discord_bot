const { messenger } = require("../utils");
const { rollDice, pick, quote } = require("./picker");
const { ping, pong, bo, ba } = require("./textReply");
const version = require("./version");

const def = messenger(() => "Implement it first u f*cking IDIOT!");

module.exports = {
  ping,
  pong,
  bo,
  ba,
  version,
  rollDice,
  pick,
  quote,
  def,
};

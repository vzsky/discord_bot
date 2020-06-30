const { randList, messenger } = require("../utils");

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

module.exports = { pick, rollDice, quote };

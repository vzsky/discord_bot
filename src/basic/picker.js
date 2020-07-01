const { randList, messenger } = require("../utils");

const config = {
  faces: ["⚀ : 1!", "⚁ : 2!", "⚂ : 3!", "⚃ : 4!", "⚄ : 5!", "⚅ : 6!"],
  quotes: [
    "\"Learn to value yourself, which means: fight for your happiness.\" – Ayn Rand",
    "\"Our capacity to draw happiness from aesthetic objects or material goods in fact seems critically dependent on our first satisfying a more important range of emotional or psychological needs, among them the need for understanding, for love, expression and respect.\" – Alain De Botton",
  ],
};

const pick = messenger((msg) => {
  return "Result is : " + randList(msg.cmd[1].split(","));
});
const rollDice = messenger(() => randList(config.faces));
const quote = messenger(() => randList(config.quotes));

module.exports = { pick, rollDice, quote };

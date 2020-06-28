const { User } = require("../model");
const { messenger } = require("../utils");

const config = messenger(async (msg) => {
  let handle = msg.cmd[1];
  await User.updateOne(
    { userID: msg.author.id },
    { codeforcesID: handle },
    { upsert: true }
  );
  return "done!";
});

module.exports = config;

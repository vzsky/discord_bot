const { User } = require("../model");
const { getapi, botReply, messenger } = require("../utils");

const rating = messenger(async (msg) => {
  let user = await User.findOne({ userID: msg.author.id });
  if (!user) return botReply(msg, "Config First!!!");
  let handle = user.codeforcesID;
  let res = await getapi(
    "https://codeforces.com/api/user.info?handles=" + handle
  );
  if (!res) return botReply(msg, "Nah");
  let rate = res.result[res.result.length - 1].rating;
  let rank = res.result[res.result.length - 1].rank;
  rank = rank.substr(0, 1).toUpperCase() + rank.substr(1, rank.length - 1);
  return "Congrats " + handle + ", ur rating is " + rank + " " + rate;
});

module.exports = rating;

const { User } = require("./model");
const {
  getapi,
  botReply,
  messageReplyGenerator,
  helperMessage,
} = require("./utils");

const config = async (msg) => {
  let handle = msg.cmd[1];
  await User.updateOne(
    { userID: msg.author.id },
    { codeforcesID: handle },
    { upsert: true }
  );
  botReply(msg, "done!");
};

const rating = async (msg) => {
  let user = await User.findOne({ userID: msg.author.id });
  if (!user) return botReply(msg, "Config First!!!");
  let handle = user.codeforcesID;
  let res = await getapi(
    "https://codeforces.com/api/user.info?handles=" + handle
  );
  if (!res) return botReply(msg, "Nah");
  let rate = res.result[res.result.length - 1].rating;
  let rank = res.result[res.result.length - 1].rank;
  rank = rank.substr(0,1).toUpperCase() + rank.substr(1,rank.length - 1);
  botReply(msg, "Congrats " + handle + ", ur rating is " + rank + " " + rate);
};

let helpcmd = {
  type: "subcommands",
  headers: ["codeforces command", "USAGE : cf [subcommand]"],
  commands: [
    { usage: "config [cfhandle]", desc: "config handle with discord id" },
    { usage: "rating", desc: "display cf rating" },
  ],
};

const help = messageReplyGenerator(helperMessage(helpcmd));

module.exports = {
  config,
  help,
  rating,
};

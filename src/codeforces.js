const { User } = require("./model");
const { getapi, botReply, messageReplyGenerator } = require("./utils");

const config = async (msg) => {
  let handle = msg.args[1];
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
    "https://codeforces.com/api/user.rating?handle=" + handle
  );
  if (!res) return botReply(msg, "Nah");
  let rate = res.result[res.result.length - 1].newRating;
  botReply(msg, "Congrats " + handle + ", ur rating is " + rate);
};

let helpmsg = `
codeforces commands
- config [handle]
- help
- rating
  `;

const help = messageReplyGenerator(helpmsg);

module.exports = {
  config,
  help,
  rating,
};

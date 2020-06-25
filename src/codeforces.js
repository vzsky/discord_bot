const { User } = require("./model");
const { sendMessage, getapi } = require("./utils");

const config = async (ctx) => {
  let handle = ctx.args[1];
  await User.updateOne(
    { userID: ctx.userID },
    { codeforcesID: handle },
    { upsert: true }
  );
  sendMessage("done!", ctx);
};

const help = (ctx) => {
  msg = `
codeforces commands
- config [handle]
- help
- rating
  `;
  sendMessage(msg, ctx);
};

const rating = async (ctx) => {
  let user = await User.findOne({ userID: ctx.userID });
  if (!user) return sendMessage("Config first!!!", ctx);
  let handle = user.codeforcesID;
  let res = await getapi(
    "https://codeforces.com/api/user.rating?handle=" + handle
  );
  if (!res) return sendMessage("Nah", ctx);
  let rate = res.result[res.result.length - 1].newRating;
  let msg = "Congrats " + ctx.user + ", ur rating is " + rate;
  sendMessage(msg, ctx);
};

module.exports = {
  config,
  help,
  rating,
};

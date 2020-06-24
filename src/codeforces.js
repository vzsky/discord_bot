const { User } = require("./model");
const { sendMessage } = require("./utils");

const codeforces = (ctx) => {
  let cmd = ctx.args[0];
  if (cmd == "config") config(ctx);
};

const config = async (ctx) => {
  let handle = ctx.args[1];
  await User.updateOne(
    { userID: ctx.userid },
    { codeforcesID: handle },
    { upsert: true }
  );
  sendMessage("done!", ctx);
};

module.exports = {
  codeforces,
};

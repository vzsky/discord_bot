const { messenger, sleep } = require("../utils");
const moment = require("moment");

const parseTime = (time) => {
  let quantity = parseInt(time);
  let suffix = time[time.length - 1];
  return moment.duration(quantity, suffix);
};

const remindIn = messenger([
  (msg) => {
    let time = parseTime(msg.cmd[2]);
    return "Okay! reminding in " + time.humanize();
  },
  async (msg) => {
    let time = parseTime(msg.cmd[2]);
    time = time.asMilliseconds();
    await sleep(time);
    let remindTexts = msg.cmd[3].slice(3);
    let remindText = remindTexts.join(" ") || "Ringggg!";
    return remindText + "!!!\nthis reminder was set by " + msg.author.username;
  },
]);

module.exports = remindIn;

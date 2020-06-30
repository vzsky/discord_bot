const cheerio = require("cheerio");
const fetch = require("node-fetch");
const moment = require("moment");
const { messenger } = require("../utils");

const getversion = async () => {
  let res = await fetch(
    "https://github.com/vzsky/discord_bot/deployments/activity_log"
  );
  if (!res) return -1;
  res = await res.text();
  const $ = cheerio.load(res);
  let scope = $(".TimelineItem.pt-0.mt-0", ".page");
  let time = $("relative-time", scope).attr("datetime");
  return moment(time);
};

const version = messenger(async () => {
  let time = await getversion();
  s = "as of\n";
  s += time.format("dddd, MMMM Do YYYY, h:mm:ss a");
  return s;
});

module.exports = version;

const { getapi, messenger, helperMessage } = require("../utils");
const { def } = require("./main");
const moment = require("moment");

const api = "https://food-fetcher-bot.herokuapp.com/api/";

const getDate = () => {
  return moment().utcOffset(7);
};

const getTime = () => {
  return moment().utcOffset(7).hour();
};

const timeToEat = {
  Breakfast: 9,
  Lunch: 13,
  Dinner: 20,
};

const addToMenu = (dishes, type) => {
  s = type + "\n";
  for (dish of dishes) {
    s += "- " + dish + "\n";
  }
  s += "\n";
  return s;
};

const menuWriter = async (date, periods) => {
  let res = await getapi(api + date.format("M-D-YYYY"));
  let s = "Menu for " + date.format("dddd") + "\n\n";
  for (period of periods) {
    s += addToMenu(res[period], period);
  }
  return s;
};

const menu = messenger(async () => {
  let date = getDate();
  return await menuWriter(date, ["Breakfast", "Lunch", "Dinner"]);
});

const tomorrow = messenger(async () => {
  let date = getDate().add(1, "d");
  return await menuWriter(date, ["Breakfast", "Lunch", "Dinner"]);
});

const meal = (period) => {
  return messenger(async () => {
    let date = getDate();
    if (getTime() >= timeToEat[period]) date = date.add(1, "d");
    return await menuWriter(date, [period]);
  });
};

const next = messenger(async () => {
  let date = getDate();
  for (period of ["Breakfast", "Lunch", "Dinner"]) {
    if (getTime() < timeToEat[period]) return await menuWriter(date, [period]);
  }
  return await menuWriter(date.add(1, "d"), ["Breakfast"]);
});

const breakfast = meal("Breakfast");
const lunch = meal("Lunch");
const dinner = meal("Dinner");

let helpcmd = {
  type: "subcommands",
  headers: ["food command", "USAGE : food [subcommand]"],
  commands: [
    { usage: "menu", desc: "show today's menu" },
    { usage: "tomorrow", desc: "show tommorow's menu" },
    { usage: "breakfast", desc: "show next breakfast" },
    { usage: "lunch", desc: "show next lunch" },
    { usage: "dinner", desc: "show next dinner" },
    { usage: "next", desc: "show next meal" },
  ],
};

const help = messenger(() => helperMessage(helpcmd));

const foodCommand = {
  menu,
  breakfast,
  lunch,
  dinner,
  tomorrow,
  next,
  help,
};

const food = (msg) => {
  let cmd = msg.cmd[1];
  foodCommand[cmd] == null ? def(msg) : foodCommand[cmd](msg);
};

module.exports = food;

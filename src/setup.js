const Discord = require("discord.io");
const winston = require("winston");

require("dotenv").config();

const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [
    new winston.transports.File({ filename: "log.log" }),
    new winston.transports.Console(),
  ],
});

const bot = new Discord.Client({
  token: process.env.TOKEN,
  autorun: true,
});

bot.on("ready", (evt) => {
  logger.info("Connected" + bot.username + " - (" + bot.id + ")");
});

module.exports = {
  bot: bot,
  logger: logger,
};

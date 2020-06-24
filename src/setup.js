const Discord = require("discord.io");
const winston = require("winston");
const mongoose = require("mongoose");

require("dotenv").config();

const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [
    new winston.transports.File({ filename: "log.log" }),
    new winston.transports.Console(),
  ],
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connected to mongodb"));

const bot = new Discord.Client({
  token: process.env.TOKEN,
  autorun: true,
});

bot.on("ready", (evt) => {
  logger.info("Connected" + bot.username + " - (" + bot.id + ")");
});

module.exports = {
  bot,
  logger,
};

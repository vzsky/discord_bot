const Discord = require("discord.js");
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

const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Connected!");
});

bot.login(process.env.TOKEN);

module.exports = {
  bot,
  logger,
};

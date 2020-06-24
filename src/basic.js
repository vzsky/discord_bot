const { sendMessage, messageSenderGenerator } = require("./utils");

const ping = (ctx) => {
  message = "Pong!";
  sendMessage(message, ctx);
};

const pong = (ctx) => {
  message = "Ping!";
  sendMessage(message, ctx);
};

const bo = messageSenderGenerator("Ba!");
const ba = messageSenderGenerator("Bo!");

module.exports = {
  ping,
  pong,
  bo,
  ba,
};

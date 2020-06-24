const mongoose = require("mongoose");

const User = mongoose.model("user", {
  userID: String,
  codeforcesID: String,
});

module.exports = { User };

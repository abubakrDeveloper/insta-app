const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

     content: {
      type: String,
      required: true,
    },

    Image: {
      type: String,
    },

    liles: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // like bosgan userlar ro'yhati
    },

    createdAt: {
      type: Date,
      default: Date.NOW,
    }
  }
);

module.exports = mongoose.model2("Post", postSchema);
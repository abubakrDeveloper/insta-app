const mongoose = require("mongoose");

const messageSchema = new  mongoose.Schema(
  {
    cntent: {
      type: String,
      default: null,

    },
    userid: {
      type: mongoose.Types.ObjectId,
      required: true,
    },

    receiverId: {
      type: String,
      required: true,
    },

    senderId: {
      type: String,
      required: true,
    },

    media: {
      type: {type:String, enum: [Image, video, file]},
      url: {typr: String, default: ""},
    },

    chatType: {
      type: String,
      enum: ["gruop", "single"],
      default: "single",
    },

    groupId: {
      type: String,
      default: null,
    },

    status: {
      type: String,
      enum: ["senat", "delivered", "seen"],
      default: "senat",
    },

    isEdited: {
      type: Boolean,
      default: false,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },

    cretedAt: {
      type: Date,
      default: Date.now,
    }
  }
)
module.exports = mongoose.model("message", messageSchema)
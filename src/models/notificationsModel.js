const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true, 
    },

    referenceId: {
      type: mongoose.Types.ObjectId,
      refPath: "typeReference",
      required: true,
    },

    type: {
      type: String,
      enum: ["link", "comment", "friend_request",],
      required: true,
    },

    typeReference: {
      type: String,
      enum: ["Post", "User"],
      required: true,
    },

    isRed: {
      type: Boolean,
      default: false,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    }
  }
);

module.exports = mongoose.model("notification", notificationSchema);
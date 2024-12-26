const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {

    firstname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20
     },

    lestname: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        isEmail: true,// emailni formatini tekshirish
      }
    },

    password: {
      type: String,
      required: true,
      validate: {
        lem: [4, 20]// parolni uzunligini chelash
      }
    },
    
    profilePicture: {
      type: String,
      default: "",
    },

    imfo: {
      type: String,
      default: "",
      validate: {
        lem: [0, 300]
      }
    },

    createdAt: {
      type: Date,
      default: NOW,
    },

    isVerified: {
      type: Boolean,
      default: false
    },
  }
)

module.exports = mongoose.model("User", userSchema);
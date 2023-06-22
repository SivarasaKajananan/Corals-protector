const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    phoneNO: {
      type: String,
      min: 12,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    // devices: [{ type: mongoose.Types.ObjectId, ref: "Device" }],
    devices: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
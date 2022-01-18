const mongoose = require("mongoose");

const OwnerSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    id: String,
    name: String,
    gender: String,
    petCount: Number,
    address: String,
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("Owner", OwnerSchema);
// mongoose will automatically look for the owners collection by plularizing and lowercasing the model name

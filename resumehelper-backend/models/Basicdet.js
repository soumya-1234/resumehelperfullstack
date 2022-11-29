const mongoose = require("mongoose");

const BasicdetSchema = new mongoose.Schema(
  {
    sid: { type: String, required:true },
    mobile: { type: String, required: true},
    address: { type: String, required: true },
    website: {type: String, required: true}
  }
);

module.exports = mongoose.model("Basicdet", BasicdetSchema);
const mongoose = require("mongoose");

const SkilldetSchema = new mongoose.Schema(
  {
    sid: { type: String, required:true },
    skill: { type: String, required:true }
  }
);

module.exports = mongoose.model("Skilldet", SkilldetSchema);
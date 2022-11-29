const mongoose = require("mongoose");

const JobdetSchema = new mongoose.Schema(
  {
    rid: { type: String, required:true },
    jtitle: { type: String, required:true },
    skills: {type: String,required:true},
    jdesc: {type:String,required:true}
  }
);

module.exports = mongoose.model("Jobdet", JobdetSchema);
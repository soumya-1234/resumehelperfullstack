const mongoose = require("mongoose");

const ProjectdetSchema = new mongoose.Schema(
  {
    sid: { type: String, required:true },
    projname: { type: String, required:true },
    techno: {type: String,required:true},
    projdetails: {type:String,required:true}
  }
);

module.exports = mongoose.model("Projectdet", ProjectdetSchema);
const mongoose = require("mongoose");

const AcademicdetSchema = new mongoose.Schema(
  {
    sid: { type: String, required:true },
    percentage: { type: Number, required:true },
    percentage1: { type: Number, required: true},
    percentage2: { type: Number, required: true }
  }
);

module.exports = mongoose.model("Academicdet", AcademicdetSchema);
const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
    title: {type: String, required: true },
    institution: {type: String, required: true },
    startDate: {type: Date, required: true},
    endDate: {type: Date},
    description: {type: String},
});

module.exports = mongoose.model("Education", EducationSchema);
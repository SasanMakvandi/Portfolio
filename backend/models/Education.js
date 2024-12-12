const mongoose = required("mongoose");

const EducationSchema = new mongoose.Schema({
    titile: {type: String, required: true },
    institution: {type: String, required: true },
    startDate: {type: Date, required: true},
    endDate: {type: Date},
    description: {type: String},
});

module.exports = mongoose.model("Education", EducationSchema);
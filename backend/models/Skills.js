const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
    conent: {type : String, required: true}
});

module.exports = mongoose.model("Skill", SkillSchema)
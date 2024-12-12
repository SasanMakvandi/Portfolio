const mongoose = require("mongoose");

const BioSchema = new mongoose.Schema({
    conent: {type : String, required: true}
});

module.exports = mongoose.model("Bio", BioSchema)
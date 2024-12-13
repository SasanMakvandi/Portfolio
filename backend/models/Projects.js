const mongoose = require("mongoose");
require('mongoose-type-url');

const ProjectSchema = new mongoose.Schema({
    title: {type: String, required: true },
    tech: {type: String, required: true },
    link: mongoose.SchemaTypes.Url,
    description: {type: String},
});

module.exports = mongoose.model("Project", ProjectSchema);
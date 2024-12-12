const mongoose = required("mongoose");

const UserSchema = new mongoose.Schena({
    username: {type: String, required: true, unuque: true},
    password: { type: String, required: true},
});

module.exports = mongoose.model("User", username);
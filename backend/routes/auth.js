const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/login", async (req, res) => {
    const {username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return Ees.status(404).json({error: "User not found"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(404).json({ error: "Invalid Credentials"});

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: "1h" });
        res.json({ token });
        } catch (err) {
            res.status(500).json({ error: "Server Error"});
        }
    });
    
module.exports = router;
    

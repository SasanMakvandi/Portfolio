const express = require("express");
const Education = require("../models/Education");

const router = express.Router();

router.get("/", async(req, res) =>{
    try {
        const education = await Education.find();
        res.json(education);
    } catch (err) {
        res.status(500).json({error: "Server Error"});
    }
});

router.put("/", async(req, res) => {
    const {title, institution, startDate, endDate, description } = req.body;
    try {
        const education = await Education.findOneAndUpdate({}, {content}, {new: true, upsert: true});
        res.json(bio);
    } catch (err) {
        res.status(500).json({error: "Server Error"});
    }
});
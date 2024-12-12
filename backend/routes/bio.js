const express = require("express");
const Bio = require("../models/Bio");

const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const bio =  await Bio.findOne();
        res.json(bio);
    } catch (err) {
        res.status(500).json({error: "Server Error"});
    }
});


router.put("/", async (req, res) => {
    const {content} = req.body;
    try {
        const bio = await Bio.findOneAndUpdate({}, {content}, {new: true, upsert: true});
        res.json(bio);
    } catch (err) {
        res.status(500).json({error: "Server Error"});
    }
});
const express = require("express");
const Experience = require("../models/Experience");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const experience = await Experience.find();
        res.json(experience);
    } catch (err) {
        res.status(500).json({error: "Server Error"});
    }
});


router.put("/", async(req, res) => {
    const{title, company, startDate, endDate, description} = req.body;

    if(!title || !company || !startDate) {
        return res.status(400).json({error: " Tittle, Institutuion or description missing"} );
    }

    try {
        const updateExperience = await Experience.findOneAndUpdate(
            {title},
            {title, company, startDate, endDate, description},
            {new: true, upset: true}    
        );
        res.json(updateExperience);
    }
    catch (err) {
        res.status(500).json({error: "Server Error"});
    }
});

module.export = router;

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
    if (!title || !institution || !startDate) {
        return res.status(400).json({error:" Tittle, Institutuion or description missing"});
    }


    try {
        const updateEducation = await Education.findOneAndUpdate(
            { title },
            { title, institution, startDate, endDate, description },
            { new: true, upset: true}
        );
        res.json(updateEducation);
    }
    catch (err) {
        res.status(500).json({ error: "Server Error"});
    }
});

module.exports = router;
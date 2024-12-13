const express = require("express");
const Skills = require("../models/Skills");

const router = express.Router();

router.get("/", async(req, res) =>{
    try {
        const skills = await Skills.find();
        res.json(skills);
    }
    catch (err) {
        res.status(500).json({error: "Server Error"});
    }
});

router.put("/", async(req, res) => {
    const {content} = req.body();
    if(!content) {
        return res.status(400).json({error:"Something is missing"});
    }

    try {
        const updateSkills = await Skills.findOneAndUpdate(
            {content},
            {content},
            {new: true, upset: true}
        );
        res.json(updateSkills);
    }
    catch (err) {
        res.status(500).json({error: "Server Error"});
    }
});
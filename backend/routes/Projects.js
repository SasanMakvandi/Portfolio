const express = require("express");
const Projects = require("../models/Projects.js");
const router = express.Router();

router.get("/", async(req, res) =>{
    try{
        const projects =  await Projects.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({error: "Server Error"});
    }
});

router.put("/", async(req, res) => {
    const {title, tech, link, description} = req.body;
    if(!title || !tech || !link || !description) {
        return res.status(400).json({error: "Something missing"});
    }

    try{
        const updateProjects = await Projects.findOneAndUpdate(
            {title},
            {title, tech, link, description},
            {new: true, upset: true}
        );
        res.json(updateProjects);
    }
    catch (err) {
        res.status(500).json({error: "Server Error"});
    }
});

module.exports = router;
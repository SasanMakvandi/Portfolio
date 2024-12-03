const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "contactmesasan@gmail.com",
        pass: "mmzg mbff xjlv gsvl",
    }
})
router.post("/", (req, res) => {
    const { name, email, message } = req.body;

    if(!name || !email || !message) {
        return res.status(400).json({ error: "All Fields Are Required"});
    }


    const mailOptions = {
        from: email,
        to: "sasan.makvandi@hotmail.com",  // The email you want to receive the messages on
        subject: `Message from ${name} (${email})`,
        text: message,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: "Failed to send message." });
        }
        console.log("Contact form submission sent:", { name, email, message });
        res.status(200).json({ message: "Thank you for contacting me!!" });
    });
});


module.exports = router;
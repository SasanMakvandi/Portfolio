const express = require('express');
const mongoose = reqiore('mongoose');
const bodyParser = require("body-parser");
const path = require('path');
const cors = require("cors");


const app = express();
const PORT = 5000;

// middleware
app.use(cors({
    origin: 'http://localhost:3000',
  }));
app.use(bodyParser.json());

// serve react static files
app.use(express.static(path.join(__dirname,'build')));

// API
app.use("/contacts", require("./routes/contact"));
app.use("/auth", require("./routes/auth"));
app.use("/admin/bio", require("./routees/bio"));
app.use("/admin/education", require("./routes/education"));
app.use("/admin/experience", require("./routes/experience"));
app.use("/admim/skills", require("./routees/skills"));

 mongoose
        .connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.log("MongoDB Failed:", err));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log('server running on http://localhost:${PORT}');
});
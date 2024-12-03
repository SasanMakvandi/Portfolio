const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;
const bodyParser = require("body-parser");
const contactsRoute = require("./routes/contact")
const cors = require("cors");

app.use(cors({
    origin: 'http://localhost:3000',
  }));

app.use(bodyParser.json());

// serve react static files
app.use(express.static(path.join(__dirname,'build')));

// API example
app.use("/contacts", contactsRoute);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log('server running on http://localhost:${PORT}');
});
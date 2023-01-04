const express = require("express");
const path = require('path');
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors());

app.use(express.static(__dirname + '/public'));

// simple route
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
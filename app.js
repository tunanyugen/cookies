const express = require("express");
const app = express();

const PORT = 8000;

app.use("/static", express.static(__dirname + "/dist"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
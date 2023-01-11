const express = require("express");
const app = express();
app.get('/', function (req, res) {
    res.send("<h1> Hello this is HTML Format </h1>")
})

app.listen(8000, function () {
    console.log("Server is started at port 8000")
});
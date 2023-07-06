// import express and create app
const express = require("express");
const app = express();

// create routing
app.get('/', (req, res) => {
    res.json({hello: "world"});
});

// start server
app.listen(4000);
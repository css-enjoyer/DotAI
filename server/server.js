// import env variables
if(process.env.NODE_ENV != 'production') { 
    require("dotenv").config(); 
}
// import express and create app
const express = require("express");
const app = express()

// create routing
app.get('/', (req, res) => {
    res.json({hello: "world"});
});

// start server
app.listen(process.env.PORT);
// import env variables
if(process.env.NODE_ENV != 'production') { 
    require("dotenv").config(); 
}
// import dependencies
const express = require("express");
const connectToDB = require("./config/connectToDB");

// create express app
const app = express()

// connect to database
connectToDB();

// create routing
app.get('/', (req, res) => {
    res.json({hello: "world"});
});

// start server
app.listen(process.env.PORT);
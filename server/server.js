// server.js is responsible for creating the backend server that connects the frontend of your web application to the backend. It listens for incoming requests from the frontend and routes them to the appropriate handlers based on the defined routes. It handles these requests by performing necessary operations, such as retrieving data from a database, processing the data, and returning a response back to the frontend. 

// import env variables
if(process.env.NODE_ENV != 'production') { 
    require("dotenv").config(); 
}
// import dependencies
const express = require("express");
const axios = require("axios");
const connectToDB = require("./config/connectToDB");
const { Hero } = require("./models/hero");

// create express app
const app = express()
app.use(express.json());

// connect to database
connectToDB();

// create routes
app.get('/', (req, res) => {
    res.json({hello: "world"});
});
app.get("/heroes", async (req, res) => {
    try {
        const heroes = await Hero.find({}, { name: 1, categories: 1, _id: 0 }); // Projection to include only name and categories fields
        res.json(heroes);
    } catch (error) {
        console.error("Error retrieving heroes:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});


// start server
app.listen(process.env.PORT);

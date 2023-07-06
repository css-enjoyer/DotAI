// import env variables
if(process.env.NODE_ENV != 'production') { 
    require("dotenv").config(); 
}
// import dependencies
const express = require("express");
const axios = require("axios");
const connectToDB = require("./config/connectToDB");

// create express app
const app = express()

// connect to database
connectToDB();

// create routes
app.get('/heroes', async (req, res) => {
    try {
        const response = await axios.get('https://api.opendota.com/api/heroes');
        const heroesData = response.data;
        res.json(heroesData);
    } catch (error) {
        console.error('Error retrieving heroes data:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.get('/', (req, res) => {
    res.json({hello: "world"});
});

// start server
app.listen(process.env.PORT);
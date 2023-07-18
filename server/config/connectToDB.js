// connectToDB.js is a function that connects to the mongoDB using the mongoose library

// import env variables
if(process.env.NODE_ENV != 'production') { 
    require("dotenv").config(); 
}
// import mongoose
const mongoose = require("mongoose");
const {Hero, createHeroModels} = require("../models/hero");
const categorizeHeroes = require("../config/categorizeHeroes");
// const uncategorizeHeroes = require("../config/uncategorizeHeroes");
// const removeDuplicates = require("../models/removeDuplicates");
// const removeHeroes = require("../models/removeHeroes");

async function connectToDB() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to MongoDB");
    
        // Create hero models after successful database connection
        // removeDuplicates();
        // uncategorizeHeroes();
        // await removeHeroes();
        await createHeroModels();
        categorizeHeroes();
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}
  

module.exports = connectToDB;
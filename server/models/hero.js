// hero.js defines the structure and properties of a hero object

const axios = require("axios");
const mongoose = require("mongoose");

// Define the hero schema
const heroSchema = new mongoose.Schema({
	name: { type: String, required: true },
	categories: [{ type: String }],
});

// Create the hero model
const Hero = mongoose.model("Hero", heroSchema);

async function createHeroModels() {
	try {
		// Retrieve hero data from the API
		const response = await axios.get("https://api.opendota.com/api/heroStats");
		const heroData = response.data;
	
		// Iterate over the hero data and create/update a model for each hero
		for (const hero of heroData) {
			const existingHero = await Hero.findOne({ name: hero.localized_name });
			// Hero doesn't exist in the database, create a new hero model
			if(!existingHero) {
				const newHero = new Hero({
					name: hero.localized_name,
					categories: [], // Assign categories as needed
				});
			await newHero.save();
			}
		}
		console.log("Hero models created/updated successfully");
	} catch (error) {
		console.error("Error creating/updating hero models:", error);
	}
  }

module.exports = { Hero: mongoose.model("Hero", heroSchema), createHeroModels };


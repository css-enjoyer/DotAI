const { Hero } = require("../models/hero");
const heroCategoryMapping = require("./heroCategoryMapping.json");

async function categorizeHeroes() {
    try {
        // Retrieve the list of heroes
        const heroes = await Hero.find();
                
        // Iterate over each hero and assign categories
        heroes.forEach((hero) => {
            const categories = heroCategoryMapping[hero.name];
            if (categories) {
                categories.forEach((category) => {
                    // Check if the category already exists in the hero's categories
                    if (!hero.categories.includes(category)) {
                        hero.categories.push(category);
                    }
                });
            }
            // Save the updated hero model to the database
            hero.save();
        });
        console.log("Categories assigned to heroes successfully");
    } catch(err) {
        console.error("Error assigning categories to heroes:", err);
    }
}

module.exports = categorizeHeroes;


const { Hero } = require("../models/hero");

// Removes duplicates for heroes
async function uncategorizeHeroes(heroName) {
    try {
        // Retrieve the hero by name
        const hero = await Hero.findOne({ name: heroName });
        if (!hero) {
            throw new Error("Hero not found");
        }

        // Get the unique categories for the hero
        const uniqueCategories = [...new Set(hero.categories)];

        // Update the hero's categories with the unique categories
        hero.categories = uniqueCategories;

        // Save the updated hero model to the database
        await hero.save();

        console.log(`Duplicate categories removed for hero "${heroName}"`);
    } catch (error) {
        console.error("Error removing duplicate categories:", error);
    }
}

module.exports = uncategorizeHeroes;

const { Hero } = require("../models/hero");
const heroCategoryMapping = require("./heroCategoryMapping.json");

async function categorizeHeroes() {
    try {
        // Retrieve the list of heroes
        const heroes = await Hero.find();

        // Iterate over each hero and assign categories
        heroes.forEach((hero) => {
            const categoriesFromJson = heroCategoryMapping[hero.name];
            const existingCategories = new Set(hero.categories);

            if (categoriesFromJson) {
                const categoriesToAdd = categoriesFromJson.filter((category) => !existingCategories.has(category));
                const categoriesToRemove = hero.categories.filter((category) => !categoriesFromJson.includes(category));

                if (categoriesToAdd.length > 0 || categoriesToRemove.length > 0) {
                    categoriesToAdd.forEach((category) => {
                        hero.categories.push(category);
                    });

                    hero.categories = hero.categories.filter((category) => categoriesFromJson.includes(category));

                    // Save the updated hero model to the database
                    hero.save();

                    console.log(`Categories updated for ${hero.name}:`);
                    if (categoriesToAdd.length > 0) {
                        console.log("Added:", categoriesToAdd);
                    }
                    if (categoriesToRemove.length > 0) {
                        console.log("Removed:", categoriesToRemove);
                    }
                }
            }
        });

        console.log("Categories assigned to heroes successfully");
    } catch (err) {
        console.error("Error assigning categories to heroes:", err);
    }
}

module.exports = categorizeHeroes;

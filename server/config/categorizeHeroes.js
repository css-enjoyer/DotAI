// Define the categories
// const categories = [
//     // Lane
//     "Safelane",
//     "Midlane",
//     "Offlane",
//     "Soft Support",
//     "Hard Support",
//     "Lane Sustainers",
//     "Lane Dominators",
//     "Solo Laners",
//     // Teamfight
//     "Initiator",
//     "Nuker",
//     "Disabler",
//     "Escape",
//     "Debuff",
//     "BKB Disablers",
//     "Anti Escape",
//     "Instant Lockdown",
//     "Saver",
//     "Burn Damage",
//     "Crowd Control",
//     // General
//     "Anti Intelligence",
//     "Anti Strength",
//     "Anti Agility",
//     "Anti Melee",
//     "Anti Ranged",
//     "Anti Physical",
//     "Anti Magic",
//     "Split Push"
//     "Ranged",
//     "Melee",
//     "Wave Clear",
//     "Sustain",
//     "Anti Mana",
//     "Anti Push",
//     "Anti Heal",
//     "Roshan",
//     "Highground Defense",
//     "Highground Offense",
//     "Global Presence",
//     "Anti Invi",
//     "Anti Burst",
//     "Anti Evasion",
//     "Anti Summons",
//     "Anti Illusion",
//     "Area Vision",
//     "Area Control",
// ]; 

const { Hero } = require("../models/hero");

async function categorizeHeroes() {
    try {
        // Retrieve the list of heroes
        const heroes = await Hero.find();
        
        // Define the mapping object for hero names and categories
        const heroCategoryMapping = {
            "Anti-Mage": ["Anti Magic", "Split Push"],
            // "Lina": ["Nuker", "Support"],
            // "Tidehunter": ["Initiator", "Tank"],
        };
        
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


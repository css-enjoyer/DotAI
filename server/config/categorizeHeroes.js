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
//     "Mobile",
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
            "Anti-Mage": ["Safelane","Support Killer","Agility","Anti Intelligence","Anti Magic","Melee","Split Push","Mobile","Anti Mana"],
            "Axe": ["Offlane","Solo Laner","Lane Dominator","Initiator","Disabler","BKB Disabler","Burn Damage","Strength","Anti Agility","Melee","Wave Clear"],
            "Bane": ["Hard Support","Baby Sitter","Lane Sustainer","Lane Dominator","Disabler","BKB Disabler","Instant Lockdown","Intelligence"],
            "Bloodseeker": [],
            "Crystal Maiden": [],
            "Drow Ranger": [],
            "Earth Shaker": [],
            "Juggernaut": [],
            "Mirana": [],
            "Morphling": [],
            "Shadow Fiend": [],
            "Phantom Lancer": [],
            "Puck": [],
            "Pudge": ["Offlane","Roamer","Disabler","BKB Disabler","Saver","Burn Damage","Highground Offense","Support Killer","Strength","Melee","Instant Lockdown"],
            "Razor": [],
            "Sandking": [],
            "Storm Spirit": [],
            "Sven": [],
            "Tiny": [],
            "Vengeful Spirit": [],
            "Windranger": [],
            "Zeus": [],
            "Kunkka": [],
            "Lina": [],
            "Lion": [],
            "Shadow Shaman": [],
            "Slardar": [],
            "Tidehunter": [],
            "Witch Doctor": [],
            "Lich": [],
            "Riki": [],
            "Enigma": [],
            "Tinker": [],
            "Sniper": [],
            "Necrophos": [],
            "Warlock": [],
            "Beastmaster": [],
            "Queen of Pain": [],
            "Venomancer": [],
            "Faceless Void": [],
            "Wraith King": [],
            "Death Prophet": [],
            "Phantom Assassin": [],
            "Pugna": [],
            "Templar Assassin": [],
            "Viper": [],
            "Luna": [],
            "Dragon Knight": [],
            "Dazzle": [],
            "Clockwork": [],
            "Leshrac": [],
            "Lifestealer": [],
            "Dark Seer": [],
            "Clinkz": [],
            "Omniknight": [],
            "Enchantress": [],
            "Huskar": [],
            "Night Stalker": [],
            "Broodmother": [],
            "Bounty Hunter": [],
            "Weaver": [],
            "Jakiro": [],
            "Batrider": [],
            "Chen": [],
            "Spectre": [],
            "Ancient Apparition": [],
            "Doom": [],
            "Ursa": [],
            "Spirit Breaker": [],
            "Gyrocopter": [],
            "Alchemist": [],
            "Invoker": [],
            "Silencer": [],
            "Outworld Devourer": [],
            "Lycan": [],
            "Brewmaster": [],
            "Shadow Demon": [],
            "Lone Druid": [],
            "Chaos Knight": [],
            "Meepo": [],
            "Treant Protector": [],
            "Ogre Magi": [],
            "Undying": [],
            "Rubick": [],
            "Disruptor": [],
            "Nyx Assassin": [],
            "Naga Siren": [],
            "Keeper of the Light": [],
            "Io": [],
            "Visage": [],
            "Slark": [],
            "Medusa": [],
            "Troll Warlord": [],
            "Centaur Warrunner": [],
            "Magnus": [],
            "Timbersaw": [],
            "Bristleback": [],
            "Tusk": [],
            "Skywrath Mage": [],
            "Abaddon": [],
            "Elder Titan": [],
            "Legion Commander": [],
            "Techies": [],
            "Ember Spirit": [],
            "Earth Spirit": [],
            "Underlord": [],
            "Terrorblade": [],
            "Phoenix": [],
            "Oracle": [],
            "Winter Wyvern": [],
            "Arc Warden": [],
            "Monkey King": [],
            "Dark Willow": [],
            "Pangolier": [],
            "Grimstroke": [],
            "Hoodwink": [],
            "Void Spirit": [],
            "Snapfire": [],
            "Mars": [],
            "Dawnbreaker": [],
            "Marci": [],
            "Primal Beast": [],
            "Muerta": [],
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


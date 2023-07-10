const { Hero } = require("../models/hero");

// Remove all categories for all heroes
async function uncategorizeHeroesHeroes() {
  try {
    const heroes = await Hero.find();

    for (const hero of heroes) {
      hero.categories = [];
      await hero.save();
    }

    console.log("All categories removed for all heroes");
  } catch (error) {
    console.error("Error removing categories for all heroes:", error);
  }
}

module.exports = uncategorizeHeroesHeroes;

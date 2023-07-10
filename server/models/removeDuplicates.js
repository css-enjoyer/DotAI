const { Hero } = require("./hero");

async function removeDuplicates() {
  try {
    const heroes = await Hero.find({}, { name: 1 });
    const duplicateHeroNames = [];
    const uniqueHeroNames = new Set();

    for (const hero of heroes) {
      if (uniqueHeroNames.has(hero.name)) {
        duplicateHeroNames.push(hero.name);
      } else {
        uniqueHeroNames.add(hero.name);
      }
    }

    for (const name of duplicateHeroNames) {
      await Hero.deleteMany({ name: name });
    }

    console.log("Duplicate heroes removed successfully");
  } catch (error) {
    console.error("Error removing duplicate heroes:", error);
  }
}

module.exports = removeDuplicates;
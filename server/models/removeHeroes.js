const { Hero } = require("./hero");

async function removeAllHeroes() {
  try {
    await Hero.deleteMany({});
    console.log("All heroes removed successfully");
  } catch (error) {
    console.error("Error removing heroes:", error);
  }
}

module.exports = removeAllHeroes;
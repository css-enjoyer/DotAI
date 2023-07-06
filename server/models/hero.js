const heroSchema = new mongoose.Schema({
    name: { type: String, required: true },
    categories: [{ type: String }],
  });

  const Hero = mongoose.model('Hero', heroSchema);

  module.exports = Hero;
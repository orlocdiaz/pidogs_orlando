const { Temperament } = require("../db");
const axios = require("axios");

const getAllTemperaments = async () => {
  const temperaments = [];
  const apiUrl = await axios.get("https://api.thedogapi.com/v1/breeds");
  await apiUrl.data.forEach((dog) => {
    const dogTemperaments = dog.temperament && dog.temperament.split(", ");
    if (dogTemperaments) {
      for (let i = 0; i < dogTemperaments.length; i++) {
        !temperaments.includes(dogTemperaments[i]) &&
          temperaments.push(dogTemperaments[i]);
      }
    }
  });
  // temperaments.sort();
  temperaments.forEach((temp) => {
    Temperament.findOrCreate({
      where: { temperament: temp },
    });
  });
  return Temperament.findAll();
};

module.exports = getAllTemperaments;

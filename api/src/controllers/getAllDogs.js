const { Dog, Temperament } = require("../db");
const axios = require("axios");

const getDogsFromApi = async () => {
  const apiUrl = await axios.get("https://api.thedogapi.com/v1/breeds");
  const apiData = await apiUrl.data.map((dog) => {
    return {
      id: dog.id,
      image: dog.image.url,
      breed: dog.name,
      heigth: dog.height.metric,
      weight: dog.weight.metric,
      life_span: dog.life_span,
      temperament: dog.temperament,
    };
  });
  return apiData;
};

const getDogsFromDB = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["temperament"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllDogs = async () => {
  let apiData = await getDogsFromApi();
  let dbData = await getDogsFromDB();
  const allData = apiData.concat(dbData);
  return allData;
};

module.exports = getAllDogs;

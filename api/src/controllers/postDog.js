const { Dog, Temperament } = require("../db");

const postDog = async ({
  image,
  breed,
  weight,
  height,
  life_span,
  temperament,
}) => {
  const dogExists = await Dog.findOne({ where: { breed } });

  if (dogExists) {
    throw new Error("Dog already exists");
  } else {
    const temperamentDB = await Temperament.findAll({
      where: { temperament: temperament },
    });

    const temperamentMap = temperamentDB.map(
      (temp) => temp.dataValues.temperament
    );
    const temperamentJoin = temperamentMap.join(", ");
    console.log(temperamentJoin);

    let createDog = await Dog.create({
      image,
      breed,
      weight,
      height,
      life_span,
      temperament: temperamentJoin,
    });

    /*     let temperamentMap = temperamentDB.map((temp) => temp.temperament);
    let temperamentJoin = temperamentMap.join(", "); */

    createDog.addTemperament(temperamentDB);
  }

  //!----------------------------------
  /*   const [newPokemon, created] = await Pokemon.findOrCreate({
    where: { name },
    defaults: { id, name, image, hp, attack, defense, speed, height, weight },
  });

  if (!created) {
    res.status(404).send("El Pokemon ya existe");
  } else {
    for (const element of types) {
      const idType = await Type.findOne({ where: { name: element } });
      await newPokemon.addType(idType);
    }
    res.status(200).send("El Pokemon se ha creado con exito");
  } */

  /*   for (const element of pokemonData) {
    const { id, name, height, weight, sprites, stats, types } = element;
    const typeNames = types.map((type) => type.type.name);

    const pokemonDetails = {
    id,
    name,
    image: sprites.other.dream_world.front_default,
    hp: stats[0].base_stat,
    attack: stats[1].base_stat,
    defense: stats[2].base_stat,
    speed: stats[5].base_stat,
    height,
    weight,
    types: typeNames,
    };

    pokemonsApi.push(pokemonDetails);
}*/
};

module.exports = postDog;

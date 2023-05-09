const { Dog, Temperament } = require("../db");
const getAllDogs = require("./getAllDogs");

const getDogById = async (id) => {
  const allDogs = await getAllDogs();
  const dog = await allDogs.find((dog) => dog.id == id);
  if (dog) {
    return dog;
  } else {
    throw new Error("Dog ID not found");
  }
};

module.exports = getDogById;

/* 📍 GET | /dogs/:idRaza
Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.
La raza es recibida por parámetro (ID).
Tiene que incluir los datos de los temperamentos asociadas a esta raza.
Debe funcionar tanto para los perros de la API como para los de la base de datos. */

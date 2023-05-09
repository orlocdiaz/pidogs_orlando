const { Router } = require("express");
const getAllDogs = require("../controllers/getAllDogs");
const getAllTemperaments = require("../controllers/getAllTemperaments");
const postDog = require("../controllers/postDog");
const getDogById = require("../controllers/getDogById");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", async (req, res) => {
  try {
    const breed = req.query.breed;
    let allDogs = await getAllDogs();
    if (breed) {
      let dogBreed = await allDogs.filter((dog) =>
        dog.breed.toLowerCase().includes(breed.toLowerCase())
      );
      dogBreed.length
        ? res.status(200).send(dogBreed)
        : res.status(400).send("No matches for your search");
    } else {
      res.status(200).json(allDogs);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/temperaments", async (req, res) => {
  try {
    let allTemperaments = await getAllTemperaments();
    res.status(200).json(allTemperaments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/dogs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let dogById = await getDogById(id);
    res.status(200).json(dogById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/dogs", async (req, res) => {
  try {
    await postDog(req.body);
    res.status(200).send("Successfully added");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

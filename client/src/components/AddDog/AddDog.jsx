import React, { useState } from "react";
import styles from "./AddDog.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  validateBreed,
  validateImage,
  validateLS,
  validateHWT,
} from "./validations";

const AddDog = () => {
  const dogs = useSelector((state) => state.allDogs);
  const temperaments = useSelector((state) => state.allTemperaments);
  const [dogData, setDogData] = useState({
    image: undefined,
    breed: undefined,
    height: undefined,
    weight: undefined,
    life_span: undefined,
    temperament: [],
  });
  const [minHeight, setMinHeight] = useState();
  const [minWeight, setMinWeight] = useState();
  const [showTemps, setShowTemps] = useState(false);

  const postDog = async (dog) => {
    const URL = "http://localhost:3001/dogs";
    try {
      await axios.post(URL, dog);
      alert("Dog added!");
    } catch (error) {
      alert("Something went wrong!");
      console.log(error.message);
    }
  };

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const key = event.target.name;
    const val = event.target.value;
    const check = event.target.checked;
    switch (key) {
      case "breed":
        if (val) {
          const toCaps = val.split(" ");
          const breedArr = toCaps.map(
            (word) => word && `${word[0].toUpperCase()}${word.substring(1)}`
          );
          const breedJoin = breedArr.join(" ");
          setDogData({ ...dogData, [key]: breedJoin });
          validateBreed({ ...dogData, [key]: breedJoin }, errors, setErrors);
        }
        break;
      case "minHeight":
        setMinHeight(+val);
        setDogData({ ...dogData, height: val });
        break;
      case "maxHeight":
        minHeight
          ? setDogData({ ...dogData, height: `${minHeight} - ${val}` })
          : setDogData({ ...dogData, height: val });
        break;
      case "minWeight":
        setMinWeight(+val);
        setDogData({ ...dogData, weight: val });
        break;
      case "maxWeight":
        minWeight
          ? setDogData({ ...dogData, weight: `${minWeight} - ${val}` })
          : setDogData({ ...dogData, weight: val });
        break;
      case "temperament":
        check
          ? setDogData({
              ...dogData,
              temperament: [...dogData.temperament, val],
            })
          : setDogData({
              ...dogData,
              temperament: [
                ...dogData.temperament.filter((temp) => temp !== val),
              ],
            });
        break;
      case "life_span":
        setDogData({ ...dogData, [key]: val + " years" });
        validateLS({ ...dogData, [key]: val }, errors, setErrors);
        break;
      default:
        setDogData({ ...dogData, [key]: val });
        validateImage({ ...dogData, [key]: val }, errors, setErrors);
        break;
    }
  };

  const handleSubmit = async (event) => {
    const findBreed = await dogs.some((dog) => dog.breed === dogData.breed);
    findBreed &&
      setErrors({
        ...errors,
        breed: "This dog is already on the list",
      });
    await validateHWT({ ...dogData }, errors, setErrors);
    if (
      !dogData.breed ||
      !dogData.image ||
      !dogData.life_span ||
      !dogData.temperament
    ) {
      validateBreed(dogData, errors, setErrors);
      validateImage(dogData, errors, setErrors);
      validateLS(dogData, errors, setErrors);
      validateHWT(dogData, errors, setErrors);
      event.preventDefault();
    }
    if (Object.keys(errors).length) {
      event.preventDefault();
      alert("Fill the fields correctly.");
      console.log(errors);
    } else {
      event.preventDefault();
      await postDog(dogData);
      // navigate("/home");
    }
  };

  return (
    dogs.length &&
    temperaments.length && (
      <div className={styles.container}>
        <form className={styles.addForm}>
          <div className={styles.breedInputContainer}>
            <label htmlFor="breedName">Breed*</label>
            <input
              type="text"
              name="breed"
              id="breed"
              placeholder="Chihuahua"
              onChange={handleChange}
              className={`${styles.inputTxt} ${
                errors.breed && styles.breedInput
              }`}
            />
            {errors.breed && <p className={styles.errorsTxt}>{errors.breed}</p>}
          </div>
          <div className={styles.imageInputContainer}>
            <label htmlFor="image">Image URL*</label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder={errors.image ? `${errors.image}` : "image.com/jpg"}
              onChange={handleChange}
              className={`${styles.inputTxt} ${
                errors.image && styles.imageInput
              }`}
            />
            {errors.image && <p className={styles.errorsTxt}>{errors.image}</p>}
          </div>
          <div className={styles.heightInputsContainer}>
            <label htmlFor="height">Height</label>
            <div className={styles.heightInputs}>
              <input
                type="text"
                name="minHeight"
                id="height"
                placeholder="Min"
                onChange={handleChange}
                className={`${styles.inputTxt} ${
                  errors.height && styles.heightInput
                }`}
              />
              -
              <input
                type="text"
                name="maxHeight"
                id="height"
                placeholder="Max"
                onChange={handleChange}
                className={`${styles.inputTxt} ${
                  errors.height && styles.heightInput
                }`}
              />
            </div>
            {errors.height && (
              <p className={styles.errorsTxt}>{errors.height}</p>
            )}
          </div>
          <div className={styles.weightInputsContainer}>
            <label htmlFor="weight">Weight</label>
            <div className={styles.weightInputs}>
              <input
                type="text"
                name="minWeight"
                id="weight"
                placeholder="Min"
                onChange={handleChange}
                className={`${styles.inputTxt} ${
                  errors.weight && styles.weightInput
                }`}
              />
              -
              <input
                type="text"
                name="maxWeight"
                id="weight"
                placeholder="Max"
                onChange={handleChange}
                className={`${styles.inputTxt} ${
                  errors.weight && styles.weightInput
                }`}
              />
            </div>
            {errors.weight && (
              <p className={styles.errorsTxt}>{errors.weight}</p>
            )}
          </div>
          <div className={styles.lsInputContainer}>
            <label htmlFor="lifeSpan">Life Span*</label>
            <input
              type="text"
              name="life_span"
              id="lifeSpan"
              placeholder="9 - 12"
              onChange={handleChange}
              className={`${styles.inputTxt} ${
                errors.life_span && styles.lifeSpanInput
              }`}
            />
            {errors.life_span && (
              <p className={styles.errorsTxt}>{errors.life_span}</p>
            )}
          </div>
          <div className={styles.tempsMenu}>
            {errors.temperament && (
              <p className={styles.errorsTxt}>{errors.temperament}</p>
            )}
            <div
              className={styles.menuTitle}
              onClick={() => setShowTemps(!showTemps)}
            >
              Select temperaments
              {showTemps ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              )}
            </div>

            <div
              className={
                showTemps
                  ? styles.tempsContainerShow
                  : styles.tempsContainerHide
              }
            >
              {temperaments.map(({ id, temperament }) => (
                <div key={id} className={styles.checkTempsDiv}>
                  <input
                    type="checkbox"
                    name="temperament"
                    value={temperament}
                    id={`${temperament}-add`}
                    onChange={handleChange}
                    className={styles.checkboxTemps}
                  />
                  <label htmlFor="temperament">{temperament}</label>
                </div>
              ))}
            </div>
          </div>

          <input
            type="submit"
            value="Add Dog"
            onClick={handleSubmit}
            className={styles.submitBtn}
          />
        </form>
      </div>
    )
  );
};

export default AddDog;

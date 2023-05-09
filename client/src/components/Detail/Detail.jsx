import React from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const dogs = useSelector((state) => state.allDogs);
  const dogDetail = dogs.find((dog) => dog.id.toString() === id);
  const { image, breed, height, weight, temperament, life_span } = dogDetail;

  return (
    <div className={styles.container}>
      <p>{dogDetail.id}</p>
      {image && <img src={image} alt="Dog"></img>}
      <h3>Breed: {breed}</h3>
      <h3>Height: {height}</h3>
      <h3>Weight: {weight}</h3>
      <h3>Temperament: {temperament}</h3>
      <h3>Life span: {life_span}</h3>
    </div>
  );
};

export default Detail;

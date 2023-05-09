import React from "react";
import styles from "./DogCard.module.css";
import { NavLink } from "react-router-dom";

const DogCard = ({ id, image, breed, temperament, weight }) => {
  return (
    <NavLink to={`/detail/${id}`}>
      <div className={styles.container}>
        <h3 className={styles.title}>Breed: {breed}</h3>
        <img src={image} alt="Dog" className={styles.dogImg} />
        <p className={styles.data}>
          <span className={styles.dataTitle}>Temperament: </span>
          {temperament}
        </p>
        {weight && !weight.includes("NaN") && (
          <p className={styles.data}>
            <span className={styles.dataTitle}>Weight: </span>
            {weight}kg
          </p>
        )}
      </div>
    </NavLink>
  );
};

export default DogCard;

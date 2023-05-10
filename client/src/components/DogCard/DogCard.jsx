import React from "react";
import styles from "./DogCard.module.css";
import { NavLink, useLocation } from "react-router-dom";

const DogCard = ({ id, image, breed, temperament, weight }) => {
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      <NavLink
        to={`/detail/${id}`}
        state={{ background: pathname }}
        className={styles.cardLink}
      >
        <img src={image} alt="Dog" className={styles.dogImg} />
        <div className={styles.dataContainer}>
          <h2 className={styles.title}>{breed}</h2>
          <strong className={styles.data}>{temperament}</strong>
          {weight && !weight.includes("NaN") && (
            <div className={styles.cardWeight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-scale-outline"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 3m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                <path d="M12 7c1.956 0 3.724 .802 5 2.095l-2.956 2.904a3 3 0 0 0 -2.038 -.799a3 3 0 0 0 -2.038 .798l-2.956 -2.903a6.979 6.979 0 0 1 5 -2.095z"></path>
              </svg>
              <span>{weight} kg</span>
            </div>
          )}
        </div>
      </NavLink>
    </div>
  );
};

export default DogCard;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Filters.module.css";
import { order } from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();
  const [auxBreed, setAuxBreed] = useState(true);
  const [auxWeight, setAuxWeight] = useState(true);

  const handleOrderBreed = () => {
    // dispatch(order(event.target.value));
    auxBreed ? dispatch(order("BD")) : dispatch(order("BA"));
    setAuxBreed(!auxBreed);
  };

  const handleOrderWeight = () => {
    // dispatch(order(event.target.value));
    auxWeight ? dispatch(order("WD")) : dispatch(order("WA"));
    setAuxWeight(!auxWeight);
  };

  return (
    <div className={styles.orderContainer}>
      {!auxBreed ? (
        <div className={styles.orderBtn} onClick={handleOrderBreed}>
          A Z
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </div>
      ) : (
        <div className={styles.orderBtn} onClick={handleOrderBreed}>
          A Z
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            />
          </svg>
        </div>
      )}
      {!auxWeight ? (
        <div className={styles.orderBtn} onClick={handleOrderWeight}>
          KG
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </div>
      ) : (
        <div className={styles.orderBtn} onClick={handleOrderWeight}>
          KG
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            />
          </svg>
        </div>
      )}

      {/* <option value="WA">Weight Asc</option>
      <option value="WD">Weight Desc</option> */}
    </div>
  );
};

export default Order;

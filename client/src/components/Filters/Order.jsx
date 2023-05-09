import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Filters.module.css";
import { order } from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(order(event.target.value));
  };

  return (
    <div className={styles.orderContainer}>
      <option value="BA" onClick={handleOrder}>
        Breed Asc
      </option>
      <option value="BD" onClick={handleOrder}>
        Breed Desc
      </option>
      <option value="WA" onClick={handleOrder}>
        Weight Asc
      </option>
      <option value="WD" onClick={handleOrder}>
        Weight Desc
      </option>
    </div>
  );
};

export default Order;

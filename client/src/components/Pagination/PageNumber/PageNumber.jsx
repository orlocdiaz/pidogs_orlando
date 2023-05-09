import React from "react";
import styles from "./PageNumber.module.css";

const PageNumber = ({ number, currentPage, toSpecificPage }) => {
  return (
    <div
      className={`${styles.container} ${
        number === currentPage && styles.activePage
      }`}
      onClick={() => toSpecificPage(number)}
    >
      {number}
    </div>
  );
};

export default PageNumber;

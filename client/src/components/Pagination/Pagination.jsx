import React from "react";
import styles from "./Pagination.module.css";
import PageNumber from "./PageNumber/PageNumber";

const Pagination = ({
  dogsPerPage,
  currentPage,
  setCurrentPage,
  totalDogs,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalDogs / dogsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const toPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const toSpecificPage = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      {pageNumbers.length > 1 && (
        <div className={styles.container}>
          <div
            className={`${styles.previousBtn} ${
              currentPage <= 1 && styles.disableBtn
            }`}
            onClick={toPreviousPage}
          >
            Previous
          </div>
          <div className={styles.pageNumBtn}>
            {pageNumbers
              .map((number) => (
                <PageNumber
                  key={number}
                  number={number}
                  currentPage={currentPage}
                  toSpecificPage={toSpecificPage}
                />
              ))
              .slice()}
          </div>
          <div
            className={`${styles.nextBtn} ${
              currentPage >= pageNumbers.length && styles.disableBtn
            }`}
            onClick={toNextPage}
          >
            Next
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;

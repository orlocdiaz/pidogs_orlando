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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-caret-left-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-caret-right-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFilters, removeBreeds } from "../../redux/actions";
import styles from "./Dogs.module.css";
import DogCard from "../DogCard/DogCard";
import FilterTemperaments from "../Filters/FilterTermperaments";
import FilterSource from "../Filters/FilterSource";
import Pagination from "../Pagination/Pagination";
import Order from "../Filters/Order";

const Dogs = () => {
  const dispatch = useDispatch();
  const [showTemps, setShowTemps] = useState();
  const dogs = useSelector((state) => state.allDogs);

  const temperaments = useSelector((state) => state.allTemperaments);
  const foundBreeds = useSelector((state) => state.foundBreeds);
  const { filteredDogs } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;
  const totalDogs = foundBreeds.length
    ? foundBreeds.length
    : filteredDogs.length
    ? filteredDogs.length
    : dogs.length;
  const sliceTo = currentPage * dogsPerPage;
  const sliceFrom = sliceTo - dogsPerPage;

  const showAll = () => {
    dispatch(removeBreeds());
    dispatch(removeFilters());
  };

  return (
    <>
      {dogs ? (
        <div className={styles.container}>
          <div className={styles.dogsContainer}>
            {filteredDogs.length
              ? filteredDogs
                  .map((dog) => (
                    <DogCard
                      key={dog.id}
                      id={dog.id}
                      image={dog.image}
                      breed={dog.breed}
                      weight={dog.weight}
                      temperament={dog.temperament}
                    />
                  ))
                  .slice(sliceFrom, sliceTo)
              : foundBreeds.length
              ? foundBreeds
                  .map((dog) => (
                    <DogCard
                      key={dog.id}
                      id={dog.id}
                      image={dog.image}
                      breed={dog.breed}
                      weight={dog.weight}
                      temperament={dog.temperament}
                    />
                  ))
                  .slice(sliceFrom, sliceTo)
              : dogs
                  .map((dog) => (
                    <DogCard
                      key={dog.id}
                      id={dog.id}
                      image={dog.image}
                      breed={dog.breed}
                      weight={dog.weight}
                      temperament={dog.temperament}
                    />
                  ))
                  .slice(sliceFrom, sliceTo)}
          </div>

          <div className={styles.filtersContainer}>
            {foundBreeds.length || filteredDogs.length ? (
              <div onClick={showAll} className={styles.showAllBtn}>
                Show all
              </div>
            ) : (
              <div></div>
            )}
            {!foundBreeds.length && <Order />}
            {temperaments.length && !foundBreeds.length && (
              <div className={styles.temperamentFilters}>
                <div
                  className={styles.filtersMenu}
                  onClick={() => setShowTemps(!showTemps)}
                >
                  Filters
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
                {showTemps || filteredDogs.length ? (
                  <div className={styles.filtersOptions}>
                    <FilterSource />
                    By temperaments
                    {temperaments.map((temp) => (
                      <FilterTemperaments
                        key={temp.id}
                        temperament={temp.temperament}
                      />
                    ))}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </div>

          <div className={styles.pagesContainer}>
            <Pagination
              dogsPerPage={dogsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalDogs={totalDogs}
            />
          </div>
        </div>
      ) : (
        <div className={styles.containerLoading}>
          <span>Loading...</span>
        </div>
      )}
    </>
  );
};

export default Dogs;

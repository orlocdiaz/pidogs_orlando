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
  const dogs = useSelector((state) => state.allDogs);
  const temperaments = useSelector((state) => state.allTemperaments);
  const foundBreeds = useSelector((state) => state.foundBreeds);
  const { filteredDogs } = useSelector((state) => state);
  // console.log(filteredDogs);
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
              <button onClick={showAll}>Show all</button>
            ) : (
              <div></div>
            )}
            {!foundBreeds.length && <Order />}
            {temperaments.length && !foundBreeds.length && (
              <div className={styles.temperamentFilters}>
                <FilterSource />
                {temperaments.map((temp) => (
                  <FilterTemperaments
                    key={temp.id}
                    temperament={temp.temperament}
                  />
                ))}
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

import React, { useState } from "react";
import styles from "./Searchbar.module.css";
import { useDispatch } from "react-redux";
import { foundBreeds } from "../../redux/actions";

const Searchbar = () => {
  const [breedSearch, setBreedSearch] = useState();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setBreedSearch(event.target.value);
  };

  const onSearch = () => {
    breedSearch && dispatch(foundBreeds(breedSearch));
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.inpSearch}
        placeholder="Search breed"
        type="search"
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            if (!event.target.value) {
              event.preventDefault();
              return alert("Please enter a breed");
            }
            onSearch();
            setBreedSearch("");
          }
        }}
        value={breedSearch}
      />
      <div
        className={styles.searchBtn}
        onClick={() => {
          onSearch();
          setBreedSearch("");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#565659"
          fill="#8d95a6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
          <path d="M21 21l-6 -6"></path>
        </svg>
      </div>
    </div>
  );
};

export default Searchbar;

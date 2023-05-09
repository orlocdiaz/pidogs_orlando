import React, { useState } from "react";
import styles from "./Searchbar.module.css";
import { useDispatch } from "react-redux";
import { foundBreeds } from "../../redux/actions";

const Searchbar = () => {
  const [breedSearch, setBreedSearch] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setBreedSearch(event.target.value);
  };

  const onSearch = () => {
    dispatch(foundBreeds(breedSearch));
  };
  /* else {
      dispatch(removeBreeds());
    }
  }; */

  return (
    <div className={styles.container}>
      <input
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
    </div>
  );
};

export default Searchbar;

import React from "react";
import styles from "./Filters.module.css";
import { filterDogs, removeFilters } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const FilterTemperaments = ({ temperament }) => {
  const parametersToFilter = useSelector((state) => state.parametersToFilter);
  const dispatch = useDispatch();

  if (!parametersToFilter.length) {
    let checkboxes = document.querySelectorAll(
      'input[name="temperament"]:checked'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }

  const onCheck = (event) => {
    if (event.target.checked) {
      dispatch(filterDogs(event.target.value));
    } else {
      dispatch(removeFilters(event.target.value));
    }
  };

  return (
    <div className={styles.container}>
      {temperament && (
        <div className={styles.checkb}>
          <input
            type="checkbox"
            name="temperament"
            value={temperament}
            id={`${temperament}-cb`}
            onChange={onCheck}
            className={styles.filterTempsCB}
          />
          <label>{temperament}</label>
        </div>
      )}
    </div>
  );
};

export default FilterTemperaments;

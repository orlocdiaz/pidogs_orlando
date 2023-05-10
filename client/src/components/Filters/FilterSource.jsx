import React from "react";
import styles from "./Filters.module.css";
import { filterSource, removeFilters } from "../../redux/actions";
import { useDispatch } from "react-redux";

const FilterSource = () => {
  const dispatch = useDispatch();

  const onCheck = (event) => {
    if (event.target.checked) {
      dispatch(filterSource(event.target.value));
    } else {
      dispatch(removeFilters(event.target.value));
    }
  };

  return (
    <div className={styles.container}>
      By source
      <div className={styles.checkb}>
        <input
          type="checkbox"
          name="Created By Me"
          value="createdAt"
          id={`createdAt-cb`}
          onChange={onCheck}
          className={styles.filterSourceCB}
        />
        <label>Added By Me</label>
      </div>
      <div className={styles.checkb}>
        <input
          type="checkbox"
          name="Dogs from Website"
          value="fromAPI"
          id={`fromAPI-cb`}
          onChange={onCheck}
          className={styles.filterSourceCB}
        />
        <label>Dogs from Website</label>
      </div>
    </div>
  );
};

export default FilterSource;

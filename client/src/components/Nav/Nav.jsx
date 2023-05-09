import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/home">
        <div>Home</div>
      </NavLink>
      <NavLink to="/add">
        <div>Add Dog</div>
      </NavLink>
    </div>
  );
};

export default Nav;

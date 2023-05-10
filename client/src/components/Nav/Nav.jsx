import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";

const Nav = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/home" className={styles.menuOptions}>
        <div className={styles.navLinkMenu}>Home</div>
      </NavLink>
      <NavLink to="/add" className={styles.menuOptions}>
        <div className={styles.navLinkMenu}>Add Dog</div>
      </NavLink>
      <Searchbar />
    </div>
  );
};

export default Nav;

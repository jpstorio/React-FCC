import React from "react";
import logo from "../logo.svg";
import styles from "../css/FactSite.module.css";

function Navbar() {
  return (
    <nav>
      <img src={logo} className={styles.nav__icon} alt="ReactLogo" />
      <h3 className={styles.nav__logo_text}>ReactFacts</h3>
      <h4 className={styles.nav__title}>React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;

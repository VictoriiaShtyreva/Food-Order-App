import React from "react";

import healthyMealsImage from "../../assets/healthymeals.jpg";
import logoImage from "../../assets/logo.png";
import HeaderButtonCart from "./HeaderButtonCart.js";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1 className={styles['visually-hidden']}>Healthy Meals</h1>
        <img src={logoImage} alt="Logo of food order app."/>
        <HeaderButtonCart />
      </header>
      <div className={styles['main-image']}>
        <img src={healthyMealsImage} alt="Healthy food."/>
      </div>
    </React.Fragment>
  );
};

export default Header;

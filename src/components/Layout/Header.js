import React from "react";
import healthyMealsImage from "../../assets/healthymeals.jpg";
import logoImage from "../../assets/logo.png";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1 className={styles['visually-hidden']}>Healthy Meals</h1>
        <img src={logoImage} alt="Logo of food order app."/>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={healthyMealsImage} alt="Healthy food."/>
      </div>
    </React.Fragment>
  );
};

export default Header;

import React from "react";

import CartIcon from "../Cart/CartIcon.js";
import styles from "./HeaderButtonCart.module.css";

const HeaderButtonCart = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}><CartIcon /></span>
      <span>Your cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderButtonCart;

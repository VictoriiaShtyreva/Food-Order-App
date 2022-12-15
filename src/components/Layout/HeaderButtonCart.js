import React, {useContext} from "react";

import CartIcon from "../Cart/CartIcon.js";
import CartContext from "../../store/cart-context.js";
import styles from "./HeaderButtonCart.module.css";

const HeaderButtonCart = (props) => {
const cartCtx = useContext(CartContext); //Now by using use context here, the header cart button component will be a re evaluated by react whenever the context changes.

const numberOfCartItems = cartCtx.items.reduce((currentnumber, item) => {
  return currentnumber + item.amount;
}, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}><CartIcon /></span>
      <span>Your cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButtonCart;

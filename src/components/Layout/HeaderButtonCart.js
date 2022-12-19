import React, { useContext, useState, useEffect } from "react";

import CartIcon from "../Cart/CartIcon.js";
import CartContext from "../../store/cart-context.js";
import styles from "./HeaderButtonCart.module.css";

const HeaderButtonCart = (props) => {
  const [buttonHighlited, setButtonHighlited] = useState(false);
  const cartCtx = useContext(CartContext); //Now by using use context here, the header cart button component will be a re evaluated by react whenever the context changes.

  const numberOfCartItems = cartCtx.items.reduce((currentnumber, item) => {
    return currentnumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${buttonHighlited ? styles.bump : ""}`;
  const { items } = cartCtx; //for re-render only items
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonHighlited(true);
    // set timer for remove class "bump"
    const timer = setTimeout(() => {
      setButtonHighlited(false);
    }, 300);
    return () => {
      clearTimeout(timer); //remove timer 
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButtonCart;

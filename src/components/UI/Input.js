import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div> //all the key value pairs in this input object, which we receive on props input are added as props to input with helps spread operator
  );
});

export default Input;

import React, { useRef, useState } from "react";
import styles from "./MealForm.module.css";
import Input from "../../UI/Input";

const MealForm = (props) => {
  const [amountIsValide, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountConvertToNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountConvertToNumber < 1 ||
      enteredAmountConvertToNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountConvertToNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValide && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealForm;

import styles from "./MealsItem.module.css";
import MealForm from "./MealForm";

const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealForm id={props.id}/>
      </div>
    </li>
  );
};

export default MealsItem;
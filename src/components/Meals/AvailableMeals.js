import React from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Italian Chicken",
    description:
      "Grilled to perfection in Italian seasonings and low carb dressing, organic spinach, mixed greens, carrots, romaine, tomatoes, parmesan cheese & onions.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Vegan Organic Grill Bowl",
    description:
      "Aorganic broccoli, cauliflower, snow peas, carrots, cabbage, green peppers, mushrooms & onions. Served on organic rice or (quinoa +.99)",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Organic Cheesecake",
    description:
      "One slice of our famous cheesecake topped with caramel sauce, turtle, mixed berry, or strawberry.",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Chicken Caesar Salad",
    description:
      "Organic Romaine heart chopped with parmesan cheese and low carb Caesar dressing.",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealsItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

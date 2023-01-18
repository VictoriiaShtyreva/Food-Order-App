import React, { useEffect, useState } from "react";

import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorHttp, setErrorHttp] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-http-19dbd-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();

      // Handle error
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      // Transform data for utilize
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          // pull out of data for the given key
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    // Handling error inside of a promise
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setErrorHttp(error.message);
    });
  }, []);

  if (isLoading) {
    return <span className={styles["meals--loading"]}></span>;
  }

  if (errorHttp) {
    return (
      <section className={styles.error}>
        <p>{errorHttp}</p>
      </section>
    );
  }

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
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

import React from 'react';
import Meal from "../components/Meal";

export default function MealList({ mealData }) {
    const nutrients = mealData.nutrients;
    console.log(nutrients);
    return (
        <div>
            <section className="nutrients">
                <h1 style={myh1}>Macros</h1>
                <ul style={nutrientsul}>
                    <li>Calories: {nutrients.calories.toFixed(0)}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Fat: {nutrients.fat.toFixed(0)}</li>
                    <li>Protein: {nutrients.protein.toFixed(0)}</li>
                </ul>

            </section>
            <section style={ mymeals } className="meals">
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />;
                })}

            </section>
        </div>
    )
}
const myh1= {
    textAlign: "center",
    marginBottom: "2rem"
}

const mymeals = {
    display: "flex",
}

const nutrientsul = {
    display: "flex",
    listStyle: "none",
    width: "35rem",
    justifyContent: "space-around",
    marginLeft: "200px",
    marginBottom: "20px"

}


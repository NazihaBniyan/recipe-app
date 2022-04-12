import React, { useEffect, useState } from "react";
import MealList from "./MealList";


function DailyPlan(){
const [mealData, setMealData]= useState(null);
const [calories, setClaories]= useState(2000);

function handelChange(e){
setClaories(e.target.value);
}
function getMealData(){
     fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=day&targetCalories=${calories}&apiKey=${process.env.REACT_APP_API_KEY}`
    )
    .then((response)=>response.json())
    .then((data)=>{
        setMealData(data);
        console.log(data);
    })
    .catch(()=>{
        console.log("error");
    });
  
}

    return(
        <div style={mymainDiv} className="MainDiv">
            <section style ={mycontrols}className="controls">
                <input
                style = {myinput}
                type="number" 
                placeholder= "Calories (e.g. 2000)"
                onChange={handelChange}/>
            </section>

        <button style={mybutton} onClick={getMealData}>Get Daily Meal Plan</button>
        {mealData && <MealList mealData={mealData}/>}
        </div>
    )
}

const mymainDiv= {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop:"250px"
}

const mycontrols= {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "-80px",
    
}
const myinput = {
    textAlign: "center",
    padding: "0.5rem",
    marginTop: "-100px"

}
const mybutton = {
    padding: "0.6rem 1.2rem",
    backgroundColor: "#313131",
    color: "white",
    border: "none",
    fontFamily: "sans-serif",
    fontSize: "1rem",
    marginLeft: "0rem",
    marginTop: "-60px",

    /*&.hover {
    cursor: "pointer",
    background: "linear-gradient(to right, #f27121, #e94057)"
} */
}


export default DailyPlan

import React, {useEffect, useState} from 'react'
import {css, styled} from 'styled-components';


export default function Meal({meal}) {
    const [imgUrl, setImageUrl] = useState("");
    useEffect(()=>{
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutition=false `

        )
        .then((response)=> response.json())
        .then((data)=>{
            setImageUrl(data.image);
        })
        .catch(()=>{
            console.log("error");
        })
    },[meal.id])


  return (
    <article style={myarticle}>
        <h1 style={myh1}>{meal.title}</h1>
        <img style={imgstyle} src={imgUrl} alt="recipe"/>
        <ul style={{instructions}} className="instructions">
            <li>Preparation time: {meal.readyInMinutes} minutes </li>
            <li>Number of servings: {meal.servings} persons </li>
            <a style={mylinks} className="links" href={meal.sourceUrl}>Go to Recipe</a>
        </ul>
    </article>
  )
}

const mylinks ={
    textDecoration: "none",
    backgroundColor: "#313131",
    color: "white",
    width: "fit-content",
    padding: "-0.5rem 1rem",
    marginTop: "20rem"
}


const myh1={
    textAlign: "center",
    marginBottom: "2rem"
}
const  imgstyle ={
    width: "100%",
    marginBottom: "1rem"
}

const   myarticle= {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    margin: "0 1rem",
    maxWidth: "18rem",
    boxShadow: "0 4px 8px 2px rgba(77, 77, 77, 0.15)"

}
const instructions = {
    fontSize: "0.9rem",
    marginBottom: "1rem",
    listStyle: "none",
    contentAlign: "center"
}






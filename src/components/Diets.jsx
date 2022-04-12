import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import{Link} from "react-router-dom";

function Diets() {
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    getDiets();
  }, [])

  const getDiets = async () => {

    const check = localStorage.getItem('diets');
    if (check) {
      setDiets(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegan`
      );
      console.log(api);
      const data = await api.json();
      console.log(data);
      localStorage.setItem('diets', JSON.stringify(data.recipes));
      setDiets(data.recipes);
    }


  };
  return (
    <div>
      <Wrapper>
        <h3>Our Vegan Picks</h3>

        <Splide 
        options={{
          rewind: true,
          rewindSpeed: 500,
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: 'free',
          gab: "10rem",
        }}
        >
        {diets.map((recipe) => {
          return (

            <SplideSlide key={recipe.id} >
              <Card >
                <Link to={'/recipe/'+ recipe.id}>
                <p>{recipe.title} </p>
                <Gradient />
                <img src={recipe.image} alt={recipe.title} />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>

    </Wrapper>
 
    </div >
  )
}
const Wrapper = styled.div`
margin: 2rem 0rem;
content: center;
width: 300 px;
h3{
  margin-bottom: -0.5rem;
}
`;
const Card = styled.div`
min-height: 5rem;
height: 10rem ;
width: 200px;
content-align: center;
margin: 2rem 0.5rem;
border-radius: 2rem;
overflow: hidden;
position: relative;
justify-content: center;


img {
  border-radius: 2rem;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit:cover; 
}

p{
  position: absolute;
  z-index: 10;
  left: 55%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  text-algin: center;
  font-weight: 600;
  font-size: 0.6rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

`;

const Gradient = styled.div`
z-index: 3;
border-radius: 2rem;
position:absolute;
width: 100%;
height: 100%;
background-image: linear-gradient(to right, 
  rgba(0,0,0,0.2), rgba(0,0,0,0.2));
  opacity:0.4;
`;
export default Diets


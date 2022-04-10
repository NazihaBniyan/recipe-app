import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, [])

  const getPopular = async () => {

    const check = localStorage.getItem('popular');
    if (check) {
      setPopular(JSON.parse(check));
    } else {
   const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
      const data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }


  };
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>

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
        {popular.map((recipe) => {
          return (

            <SplideSlide key={recipe.id} >
              <Card>
                <p>{recipe.title} </p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
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
`;
const Card = styled.div`
min-hieght: 20rem;
content-align: center;
margin: 2rem 0.5rem;
border-radius: 1rem;
overflow: hidden;
position: relative;
justify-content: center;


img {
  border-radius: 1rem;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit cover: 
}

p{
  position: absolute;
  z-index: 1;
  left: 55%;
  bottom: 10%;
  transform: translate(-50%, 30%);
  color: white;
  width: 100%;
  text-algin: center;
  font-weight: 700;
  font-size: 0.6rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

`;

const Gradient = styled.div`
z-index: 0;
width: 100%;
height: 100%;
background-image: linear-gradient(to right, 
  rgba(1,0,0,0.5), rgba(1,0,0,0.5));
`;
export default Popular


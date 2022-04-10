import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, [])

  const getVeggie = async () => {

    const check = localStorage.getItem('veggie');
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?
      apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      console.log(api);
      const data = await api.json();
      console.log(data);
      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }


  };
  return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>

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
        {veggie.map((recipe) => {
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
min-hieght: 10rem;
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
z-index: 1;
width: 100%;
height: 100%;
background-image: linear-gradient(to right, rgba(1,0,0,0.1), rgba(1,0,0,0.1));
`;
export default Veggie


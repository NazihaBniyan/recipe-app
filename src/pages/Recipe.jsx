import { useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import React from "react";

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions')

    const fetchDatails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY} `)
        const detailData = await data.json();
        setDetails(detailData);
    }
    useEffect(() => {
        fetchDatails();
    }, [params.name])

    return <DetailWrapper>
        <div>
            <h2>
                {details.title}
            </h2>
            <img height="150" width="220" src={details.image} alt="" />
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions </Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>
                    Ingredients
                </Button>
                {activeTab === 'instructions' &&(
                <div>
                    <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
                    <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>

                </div>
                )}
                {activeTab === 'ingredients' && (
                     <ul>
                     {details.extendedIngredients.map((ingredient) =>(
                         <li key={ingredient.id}>{ingredient.original}</li>
                     ))}
                 </ul>
                )}
               
            </Info>

        </div>

    </DetailWrapper>
}

const DetailWrapper = styled.div`
margin-top: 7rem;
margin-left: -7rem;
margin-bottom: 5rem;
display: flex;
.active{
    background: linear-gradient(35deg, #494949,#313131);
    color: white;
}
h2{
    margin-bottom:1rem;
    font-size: 0.9rem;
}
li{
    font-size: 0.9rem;
    line-height: 2rem;
}
ul{
    margin-top: 2rem;
}
`;

const Button = styled.button`
padding: 0.7rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 1rem;
margin-top: 0.2rem;
font-weight: 600
`;
const Info = styled.div`
margin-left: 16rem;
margin-top: -16rem;

h3{
    font-size: 0.9rem;
    font-weight: 400;
    padding: 0rem 0rem;
    }

`;

export default Recipe;


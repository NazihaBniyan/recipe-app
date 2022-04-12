import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function Category() {
    return (
        <List  >
            <Slink to={"/cuisine/Italian"}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </Slink>
            <Slink to={"/cuisine/American"} >
                <FaHamburger />
                <h4>American</h4>
            </Slink >
            <Slink to={"/cuisine/Thai"}>
                <GiNoodles />
                <h4>Thai</h4>
            </Slink>
            <Slink to={"/cuisine/Japanese"}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </Slink>
        </List>
    )
}
const List = styled.div`
display: flex;
justify-content: center;
margin: 9.6rem 13rem;
`;
const Slink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-item: center;
border-radius:50%;
text-align: center;
margin-right: 0.8rem;
text-decoration: none;
background: linear-gradient(35deg,#494949,#313131);
width:3.5rem;
height: 3.5rem ;
cursor: pointer;
transform: scale(0.8);

h4{
color: white;
font-size: 0.5rem;
margin-top: 0.2rem;

}
svg{
color:white;
font-size: 1rem;
margin-left: 1.3rem;
margin-top: 0.3rem;


}
&.active{
    background:  linear-gradient(to right,#f27121,#e94057);

    svg{
        color: white;
    }
    h4P{
        color: white;
    }
}

`;
export default Category
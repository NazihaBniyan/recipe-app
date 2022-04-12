import React from 'react';
import Search from "./Search";
import styled from 'styled-components';
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import Category from "./Category";

import headimg from '../images/header.jpg'

function Header() {
    return (
        <Myheader>

            <img src={headimg} alt="" />

            <Nav>
                <GiKnifeFork />
                <Logo to={"/"}>EnjoyYourMeal</Logo>
            </Nav>

            <Slink to={"/dailyplan"}>
                Daily Plan
            </Slink>
            
            <Search />
            <Category />

        </Myheader>
    )
}

const Myheader = styled.section`
img{
    opacity: 0.6;
    z-index:-10;
    width: 1600px;
    height:300px;
    position: absolute;
    margin-left: -300px;

}`;

const Slink = styled(Link)`

  color: green;
  padding: 8px 20px;
  width: 15%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 2px 1070px;
  margin-top:97px;
  transition-duration: 1s;
  cursor: pointer;
  background-color: #313131; 
  color: white; 
  border: 2px solid #313131;
}

&:hover {
    background:  linear-gradient(to right,#f27121,#e94057);
    color: white;
    border: linear-gradient(to right,#f27121,#e94057);
    box-shadow: 6 4px 8px 2px rgba(77, 77, 7, 0.15);

  }
`;
const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
`;
const Nav = styled.div`
padding: 4rem 0rem;
margin-left:-200px;
margin-top: -50px;
display: flex;justify-content: flex-start;
align-item:center;

svg{
  font-size: 2rem
}
`;

export default Header;
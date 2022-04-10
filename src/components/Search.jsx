import styled from "styled-components";
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/"+input);
    }
    return (
        <FormStyle onSubmit={submitHandler} >
            <div>
                <FaSearch></FaSearch>
                <input onChange={(e) => setInput(e.target.value)}
                    type="text"
                    vaule={input}
                />

            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
margin: 5rem, 5rem;
div{
    width: 100%;
    margin-left: 200px;
    margin-top: -120px;
}
input{
    border: none;
    background: linear-gradient(35deg,#494949,#313131);
    font-size: 0.9rem;
    text-align: center;
    color: white;
    padding: 1rem, 3rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    height:30px;
    width:50%;
}
svg{
   z-index:1;
    top: 20%;
    left: 0%;
    transform: translate(150%,10%);
    color: white;
}
`;
export default Search

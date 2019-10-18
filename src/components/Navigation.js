import React from 'react';
import { Link } from 'react-router-dom';
import Styled from "styled-components";

const Nav = Styled.div
`
    display: flex;
    justify-content: center;
    div{
        display: flex;
        :first-child{
            margin-right: 10px;
        }
        a{
            text-decoration: none;
            color: black;
            background: #8bcf21;
            border: 1px solid black;
            width: 100px;
            text-align: center;
            padding: 10px;
            :hover{
                background: #2f9331;
            }
        }
    }
`

const Navigation = () => {
  return (
    <Nav>
        <div>
            <Link to={`/`}>Welcome</Link>
        </div>
        <div>
            <Link to={`/CharacterList`}>About</Link>
        </div>
    </Nav>
  );
};

export default Navigation;
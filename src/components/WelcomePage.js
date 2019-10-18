import React from "react";
import Styled from "styled-components";

const Welcome = Styled.div
`
  header{
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    img{
      width: 300px;
      height: 300px;
      margin: 0 auto;
    }
  }
`

export default function WelcomePage() {
  return (
    <Welcome>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </Welcome>
  );
}

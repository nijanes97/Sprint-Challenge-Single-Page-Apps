import React from "react";
import Styled from "styled-components";
const Card = Styled.div
`
  display: flex;
  flex-flow: column nowrap !important;
  margin: 10px;
  background: lightblue;
  width: 40%;
  padding: 10px;
  img{
    border: 1px solid gray;
  }
  h2{
    text-align: center;
  }
  p{
    margin: 0;
  }
`
export default function CharacterCard(props) {
  console.log(props);
  return(
    <Card>
      <img src={props.character.image} />
      <h2>{props.character.name}</h2>
      <p>Location: {props.character.location.name}</p>
      <p>Status: {props.character.status}</p>
    </Card>
  );
}

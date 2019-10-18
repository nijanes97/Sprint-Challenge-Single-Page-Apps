import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchForm from './SearchForm';
import CharacterCard from "./CharacterCard";
import Styled from "styled-components";

const List = Styled.section
`
  width: 80%;
  margin: 0 auto;

`

const Cards = Styled.div
`
  div{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    Axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response);
        const charactersFiltered = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log(response.data.results[0].name);
        setCharacters(charactersFiltered);
      })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);
  const handleChange = event => {
    setQuery(event.target.value);
  };
  console.log(query);
  return (
    <List>
      <SearchForm handleChange={handleChange} value={query}/>
      <Cards>
        <div>
          {characters.map(character => (
            <CharacterCard character={character} key={character.id}/>
          ))}
        </div>
      </Cards>
    </List>
  );
}

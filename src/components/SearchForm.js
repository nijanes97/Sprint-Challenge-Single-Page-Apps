import React, { useState } from "react";
import Styled from "styled-components";

const SearchBar = Styled.div
`
  form{
    display: flex;
    justify-content: center;
    margin: 10px;
    input{
      width: 400px;
      height: 30px;
      font-size: 20px;
      text-align: center;
    }
  }
`

export default function SearchForm(props) {
  return (
    <SearchBar>
      <form className="search">
        <input
          type="text"
          onChange={props.handleChange}
          value={props.query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
    </SearchBar>
  );
}

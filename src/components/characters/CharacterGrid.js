import React from "react";

import CharacterItem from "./CharacterItem";
import spinner from "../../assets/spinner.gif";

import "./characters.style.css";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <div className="spinner">
      <img src={spinner} alt="" />
    </div>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;

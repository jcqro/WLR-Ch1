import React from "react";
import { mockPokemonData } from "../mock/pokeData";

export default function PokeCard() {
  return (
    <div>
      <h1>Name: {mockPokemonData.name}</h1>
      Default sprite: <img src={mockPokemonData.sprites.front_default} alt="" />
      <br />
      Shiny sprite: <img src={mockPokemonData.sprites.front_shiny} alt="" />
      <br />
      <br />
      <a href={mockPokemonData.video} target="_blank" rel="noreferrer">
        Video
      </a>
    </div>
  );
}

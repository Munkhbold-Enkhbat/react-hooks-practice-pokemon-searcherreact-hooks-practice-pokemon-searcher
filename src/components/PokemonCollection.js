import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, foundPokemon }) {
  function renderPokemons() {
    // console.log("foundPokemon's name:", foundPokemon.name)
    if(foundPokemon.name === undefined) {
      return pokemons.map(pokemon => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      }) 
    } else {
      return <PokemonCard pokemon={foundPokemon}/>
    }  
  }

  return (
    <Card.Group itemsPerRow={6}>
      {renderPokemons()}
    </Card.Group>
  );
}

export default PokemonCollection;

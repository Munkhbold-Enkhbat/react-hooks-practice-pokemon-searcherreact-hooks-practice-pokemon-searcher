import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, foundPokemon }) {
  function renderPokemons() {
    // console.log("foundPokemon from Collection:", foundPokemon);
    if(foundPokemon) {
      return (<PokemonCard pokemon={foundPokemon}/>)
    } else {
      return pokemons.map(pokemon => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      })
    }    
  }

  return (
    <Card.Group itemsPerRow={6}>
      {renderPokemons()}
    </Card.Group>
  );
}

export default PokemonCollection;

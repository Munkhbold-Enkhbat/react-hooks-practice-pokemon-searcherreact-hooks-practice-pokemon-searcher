import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, searchPokemon }) {  

  const pokemonsToDisplay = pokemons.filter(pokemon => searchPokemon ? 
    pokemon.name.includes(searchPokemon) : true)    
 
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonsToDisplay.map(pokemon => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      })}
    </Card.Group>
  );
}

export default PokemonCollection;

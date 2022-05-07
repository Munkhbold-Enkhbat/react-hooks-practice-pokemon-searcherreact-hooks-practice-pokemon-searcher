import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, pokemonSearch }) {

  const displayPokemons = (list) => {
    // let list = pokemonSearch === '' ? [...pokemons] : pokemons.filter(p => p.name === pokemonSearch)
    return list.map(item => {
      return <PokemonCard key={item.id} pokemon={item}/>
    })
  }
 
  return (
    <Card.Group itemsPerRow={6}>
       {pokemonSearch === '' ? displayPokemons(pokemons) :
        displayPokemons(pokemons.filter(p => p.name === pokemonSearch))}
    </Card.Group>
  );
}

export default PokemonCollection;

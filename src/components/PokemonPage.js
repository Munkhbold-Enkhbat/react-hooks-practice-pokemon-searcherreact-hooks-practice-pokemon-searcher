import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [foundPokemon, setFoundPokemon] = useState({})

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(data => setPokemons(data))
  }, [])

  const handleChange = (e) => {
    const searchPokemon = pokemons.find(pokemon => pokemon.name === e.target.value)
    setFoundPokemon(searchPokemon)
  } 

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search handleChange={handleChange}/>
      <br />
      <PokemonCollection pokemons={pokemons} foundPokemon={foundPokemon}/>
    </Container>
  );
}

export default PokemonPage;

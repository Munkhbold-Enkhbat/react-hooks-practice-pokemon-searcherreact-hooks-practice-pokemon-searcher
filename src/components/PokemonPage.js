import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [searchPokemon, setSearchPokemon] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(data => setPokemons(data))
  }, [])

  const handleSearch = (e) => {
    setSearchPokemon(e.target.value)
  } 

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemons={pokemons}/>
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemons={pokemons} searchPokemon={searchPokemon}/>
    </Container>
  );
}

export default PokemonPage;

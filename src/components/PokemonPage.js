import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [pokemonSearch, setPokemonSearch] = useState('')

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(data => setPokemons(data))
  }, [])

  const handleChange = (e) => {
    setPokemonSearch(e.target.value)
  } 

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search handleChange={handleChange}/>
      <br />
      <PokemonCollection pokemons={pokemons} pokemonSearch={pokemonSearch}/>
    </Container>
  );
}

export default PokemonPage;

import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemons, setPokemons}) {
  const [newPokemon, setNewPokemon] = useState({
    name: '',
    hp:'',
    sprites: {
      front: '',
      back: ''
    }
  })

  const handleChange = (e) => {
    setNewPokemon({...newPokemon, [e.target.name]: e.target.value})
  }

  const handleFrontImageChange = (e) => {
    setNewPokemon({...newPokemon, sprites: {...newPokemon.sprites,
      front: e.target.value
    }})
  }

  const handleBackImageChange = (e) => {
    setNewPokemon({...newPokemon, sprites: {...newPokemon.sprites,
      back: e.target.value
    }})
  }

  const handleAddPokemon = (aPokemon) => {
    setPokemons([...pokemons, aPokemon])
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const createdPokemon = {
            name: newPokemon.name,
            hp: newPokemon.hp,
            sprites: {
              front: newPokemon.sprites.front,
              back: newPokemon.sprites.back
            }
          }

          fetch("http://localhost:3001/pokemon", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(createdPokemon)
          })
            .then(res => res.json())
            .then(pokemonData => handleAddPokemon(pokemonData))
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newPokemon.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newPokemon.hp} onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.sprites.front}
            onChange={handleFrontImageChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.sprites.back}
            onChange={handleBackImageChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

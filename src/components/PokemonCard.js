import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [isBack, setIsBack] = useState(false)

  const handleToggle = () => {
    setIsBack(isBack => !isBack)
  }

  return (
    <Card onClick={handleToggle}>      
      <div>
        <div className="image">
          <img src={isBack ? pokemon.sprites.back : pokemon.sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

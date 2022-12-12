import { useState } from "react";
import PropTypes from "prop-types";

import type { Pokemon } from "..";
import PokemonType from "./PokemonTypeChip";

import classes from "./PokemonCard.module.scss";

type Props = {
  /**
   * Pokemon information
   */
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div
      className={`${classes.card} ${isHovered && classes.hovered}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={pokemon.image} alt={pokemon.name} />
      <div className={classes.name}>{pokemon.name}</div>
      <ul className={classes.types}>
        {pokemon.types.map((type) => (
          <li key={type}>
            <PokemonType type={type} />
          </li>
        ))}
      </ul>
      <button
        className={classes.detailBtn}
        onClick={() => setCounter((c) => c + 1)}
      >
        Details ({counter})
      </button>
    </div>
  );
};
PokemonCard.propTypes = { pokemon: PropTypes.object.isRequired };

export default PokemonCard;

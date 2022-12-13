import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

import type { Pokemon } from "..";
import PokemonTypeChip from "./PokemonTypeChip";

import classes from "./PokemonCard.module.scss";

type Props = {
  /**
   * Pokemon information
   */
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classNames(classes.card, { [classes.hovered]: isHovered })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={pokemon.image} alt={pokemon.name} className={classes.img} />
      <div className={classes.name}>{pokemon.name}</div>
      <ul className={classes.types}>
        {pokemon.types.map((type) => (
          <li key={type}>
            <PokemonTypeChip type={type} />
          </li>
        ))}
      </ul>
      <Link to={`/pokemons/${pokemon.name}`} className={classes.detailBtn}>
        <button>Details</button>
      </Link>
    </div>
  );
};
PokemonCard.propTypes = { pokemon: PropTypes.object.isRequired };

export default PokemonCard;

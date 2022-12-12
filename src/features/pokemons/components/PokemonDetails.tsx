import PropTypes from "prop-types";

import type { Pokemon } from "..";
import PokemonTypeChip from "./PokemonTypeChip";

import classes from "./PokemonDetails.module.scss";

type Props = {
  pokemon: Pokemon;
};

const PokemonDetails = ({ pokemon }: Props): JSX.Element => {
  const format = (value: number) => value.toFixed(2);

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.image}>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className={classes.info}>
          <div className={classes.name}>{pokemon.name}</div>
          <div className={classes.types}>
            {pokemon.types.map((type) => (
              <PokemonTypeChip key={type} type={type} />
            ))}
          </div>
          <div>{format(pokemon.weight * 0.1)} kg</div>
          <div>{format(pokemon.height * 0.1)} m</div>
        </div>
      </div>
      <div className={classes.footer}>
        <table>
          <thead>
            <tr>
              <th>HP</th>
              <th>Attack</th>
              <th>Defense</th>
              <th>Special Attack</th>
              <th>Special Defense</th>
              <th>Speed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{pokemon.stats.hp}</td>
              <td>{pokemon.stats.attack}</td>
              <td>{pokemon.stats.defense}</td>
              <td>{pokemon.stats["special-attack"]}</td>
              <td>{pokemon.stats["special-defense"]}</td>
              <td>{pokemon.stats.speed}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
PokemonDetails.propTypes = { pokemon: PropTypes.object.isRequired };

export default PokemonDetails;

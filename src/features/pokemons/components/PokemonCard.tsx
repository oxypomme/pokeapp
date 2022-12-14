import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

import type { Pokemon } from "..";
import usePokemonCapture from "../hooks/usePokemonCapture";
import PokemonCaptureButton from "./PokemonCaptureButton";
import PokemonTypeChip from "./PokemonTypeChip";

import classes from "./PokemonCard.module.scss";

type Props = React.PropsWithoutRef<{
  /**
   * Pokemon information
   */
  pokemon: Pokemon;
}>;

const PokemonCard = ({ pokemon }: Props): JSX.Element => {
  const { isCaptured } = usePokemonCapture(pokemon);

  return (
    <div
      className={classNames(classes.card, {
        [classes.captured]: isCaptured,
      })}
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
      <div className={classes.actions}>
        <Link to={`/pokemons/${pokemon.id}`}>
          <button>Details</button>
        </Link>
        <PokemonCaptureButton
          pokemon={pokemon}
          className={classes.captureBtn}
        />
      </div>
    </div>
  );
};
PokemonCard.propTypes = { pokemon: PropTypes.object.isRequired };

export default PokemonCard;

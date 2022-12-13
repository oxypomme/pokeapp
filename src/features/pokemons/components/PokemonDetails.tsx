import classNames from "classnames";
import PropTypes from "prop-types";

import type { Pokemon } from "..";
import usePokemonCapture from "../hooks/usePokemonCapture";
import PokemonCaptureButton from "./PokemonCaptureButton";
import PokemonTypeChip from "./PokemonTypeChip";

import classes from "./PokemonDetails.module.scss";

type Props = React.PropsWithoutRef<{
  pokemon: Pokemon;
}>;

const PokemonDetails = ({ pokemon }: Props): JSX.Element => {
  const format = (value: number) => value.toFixed(2);

  const { isCaptured } = usePokemonCapture(pokemon);

  return (
    <div
      className={classNames(classes.container, {
        [classes.captured]: isCaptured,
      })}
    >
      <div className={classes.body}>
        <div className={classes.image}>
          <img src={pokemon.image} alt={pokemon.name} />
          <PokemonCaptureButton
            pokemon={pokemon}
            className={classes.captureBtn}
          />
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
              {Object.keys(pokemon.stats).map((key) => (
                <th key={key}>{key.replace(/-/g, " ")}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.entries(pokemon.stats).map(([key, value]) => (
                <td key={key}>{value}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
PokemonDetails.propTypes = { pokemon: PropTypes.object.isRequired };

export default PokemonDetails;

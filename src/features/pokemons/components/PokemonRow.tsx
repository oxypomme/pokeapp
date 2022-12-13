import { Link } from "react-router-dom";
import classNames from "classnames";

import type { Pokemon } from "..";
import usePokemonCapture from "../hooks/usePokemonCapture";
import PokemonCaptureButton from "./PokemonCaptureButton";
import PokemonTypeChip from "./PokemonTypeChip";

import classes from "./PokemonRow.module.scss";

type Props = React.PropsWithoutRef<{
  pokemon: Pokemon;
}>;

const PokemonRow = ({ pokemon }: Props): JSX.Element => {
  const { isCaptured } = usePokemonCapture(pokemon);

  return (
    <tr className={classNames(classes.row, { [classes.captured]: isCaptured })}>
      <td>
        <img src={pokemon.image} alt={pokemon.name} />
      </td>
      <td>
        <span className={classes.name}>{pokemon.name}</span>
      </td>
      <td>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {pokemon.types.map((type) => (
            <PokemonTypeChip key={type} type={type} />
          ))}
        </div>
      </td>
      <td>
        <div className={classes.actions}>
          <Link to={`/pokemons/${pokemon.name}`}>
            <button>Details</button>
          </Link>
          <PokemonCaptureButton
            pokemon={pokemon}
            className={classes.captureBtn}
          />
        </div>
      </td>
    </tr>
  );
};

export default PokemonRow;

import type { Pokemon } from "..";
import PokemonCard from "./PokemonCard";
import PokemonCardLoading from "./PokemonCardLoading";

import classes from "./PokemonList.module.scss";

type Props = {
  pokemons?: Pokemon[];
  loadingItems?: number;
};

const PokemonList = ({ pokemons, loadingItems }: Props): JSX.Element => {
  return (
    <ul className={classes.list}>
      {/* Pokemon List */}
      {pokemons &&
        pokemons.map((pokemon) => (
          <li key={pokemon.id} className={classes.element}>
            <PokemonCard pokemon={pokemon} />
          </li>
        ))}
      {/* Loading state */}
      {loadingItems &&
        new Array(loadingItems).fill(0).map((_, i) => (
          <li key={i} className={classes.element}>
            <PokemonCardLoading />
          </li>
        ))}
    </ul>
  );
};

export default PokemonList;

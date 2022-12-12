import { useCallback, useState } from "react";

import InputControl from "@/components/InputControl";

import { Pokemon } from "..";
import pokemons from "../pokemons.json";
import PokemonCard from "./PokemonCard";

import classes from "./PokemonList.module.scss";

const PokemonList = (): JSX.Element => {
  const [filter, setFilter] = useState("");

  const isHidden = useCallback(
    ({ name }: Pokemon) => !name.toLowerCase().includes(filter.toLowerCase()),
    [filter]
  );

  return (
    <>
      <InputControl
        label="Search"
        type="text"
        placeholder="Pikachu"
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value)
        }
      />
      <ul className={classes.list}>
        {(pokemons as Pokemon[]).map((pokemon) => (
          <li
            key={pokemon.id}
            className={`${classes.element} ${
              isHidden(pokemon) && classes.hidden
            }`}
          >
            <PokemonCard pokemon={pokemon} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokemonList;

import { useCallback, useMemo, useState } from "react";

import InputControl from "@/components/InputControl";
import Paginator from "@/components/Paginator";
import useFetch from "@/hooks/useFetch";

import { Pokemon } from "..";
// import pokemons from "../pokemons.json";
import PokemonCard from "./PokemonCard";

import classes from "./PokemonList.module.scss";

const PokemonList = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);

  // TODO: Move that logic
  const { data, error, isLoading } = useFetch<{
    results: Pokemon[];
    count: number;
  }>(
    // TODO: Debounce or throttle
    `https://pokeapi.fly.dev/oxypomme1222/pokemons?limit=${limit}&offset=${
      limit * (page - 1)
    }&searchText=${search}`
  );

  const maxPage = useMemo(
    () => Math.round((data?.count ?? 0) / limit),
    [data, limit]
  );
  const pokemons = useMemo(() => data?.results ?? [], [data]);

  return (
    <>
      <InputControl
        label="Search"
        type="text"
        placeholder="Pikachu"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value.toLowerCase())
        }
      />

      <ul className={classes.list}>
        {(pokemons as Pokemon[]).map((pokemon) => (
          <li key={pokemon.id} className={classes.element}>
            <PokemonCard pokemon={pokemon} />
          </li>
        ))}
        {/* TODO: Better loading screens */}
        {isLoading ? <li>Loading...</li> : <></>}
        {error ? <li>Error: {error.message}</li> : <></>}
      </ul>

      <Paginator count={maxPage} current={page} onChange={(v) => setPage(v)} />
    </>
  );
};

export default PokemonList;

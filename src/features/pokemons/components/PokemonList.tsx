import { useCallback, useMemo, useState } from "react";

import InputControl from "@/components/InputControl";
import Paginator from "@/components/Paginator";
import useFetch from "@/hooks/useFetch";

import { Pokemon } from "..";
// import pokemons from "../pokemons.json";
import PokemonCard from "./PokemonCard";
import PokemonCardLoading from "./PokemonCardLoading";

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
        {/* Pokemon List */}
        {data?.results &&
          (data.results as Pokemon[]).map((pokemon) => (
            <li key={pokemon.id} className={classes.element}>
              <PokemonCard pokemon={pokemon} />
            </li>
          ))}
        {/* Loading state */}
        {isLoading &&
          new Array(limit).fill(0).map((_, i) => (
            <li key={i} className={classes.element}>
              <PokemonCardLoading />
            </li>
          ))}
        {/* Error state */}
        {error && (
          <li>
            Error: <span style={{ color: "red" }}>{error.message}</span>
          </li>
        )}
      </ul>

      <Paginator count={maxPage} current={page} onChange={(v) => setPage(v)} />
    </>
  );
};

export default PokemonList;
